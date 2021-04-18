(ns ftx-lending.core
  (:require ["crypto" :as crypto]
            ["got" :as got]
            [clojure.string :as str]))

(def API_KEY (get (.-argv js/process) 2))
(def API_SECRET (get (.-argv js/process) 3))
(def REQUIRELENDINGS (str/split (get (.-argv js/process) 4) #","))
(def DURATION (get (.-argv js/process) 5))

(def BASE_URL "https://ftx.com")

(defn authHeader [method postPayloadString path timestamp]
  (js-obj
    "FTX-SIGN" (-> (crypto/createHmac "sha256" API_KEY)
                   (.update (str timestamp method path postPayloadString))
                   (.digest "hex"))
    "FTX-KEY" API_SECRET
    "FTX-TS" (str timestamp)))

(def createGetHeader (partial authHeader "GET" ""))
(def createPostHeader (partial authHeader "POST"))

(defn getBalances [timestamp]
  (let [path "/api/wallet/balances"]
    (. (got (str BASE_URL "/" path) (js-obj "headers" (createGetHeader path timestamp)))
       json)))

(defn getOffers [timestamp]
  (let [path "/api/spot_margin/offers"]
    (. (got (str BASE_URL "/" path) (js-obj "headers" (createGetHeader path timestamp)))
       json)))

(defn submitOffer [timestamp coin size rate]
  (let [path "/api/spot_margin/offers" payload (js-obj "coin" coin "size" size "rate" rate)]
    (. (. got post (str BASE_URL "/" path) (js-obj "headers" (createPostHeader (. js/JSON stringify payload) path timestamp) "json" payload))
       json)))

(defn getResultByCoin [results coin]
  (reduce #(if (= (. %2 -coin) coin) %2 %1) results))

(defn includeRequireLendings [coin]
  (some #(= coin %) REQUIRELENDINGS))

(defn doLending []
  (let [timestamp (-> (js/Date.)
                      (.getTime))]
    (-> (getBalances timestamp)
        (.then #(. % -result))
        (.then (fn [json]
                 (let [result (filter #(includeRequireLendings (. % -coin)) json)]
                   (if (empty? result) (. js/Promise (reject "錢包不存在此幣種")) result))))
        (.then (fn [balances]
                 (-> js/Promise
                     (.all (map #(submitOffer timestamp (. % -coin) (. % -total) 0.000001) balances)))))
        (.then (fn [] (-> js/Promise
                          (.all [(getBalances timestamp) (getOffers timestamp)]))))
        (.then #(list
                  (partial getResultByCoin (. (first %) -result))
                  (partial getResultByCoin (. (second %) -result))))
        (.then (fn [[balances offers]] (map (fn [coin]
                                              (if (= (. (balances coin) -total) (. (offers coin) -size))
                                                (str coin " now: " (. (balances coin) -total))
                                                (. js/Promise (reject "更新後的錢包與原有錢包不相等")))) REQUIRELENDINGS)))
        (.then #(print %))
        (.catch #(print (str "error: " %))))))

(doLending)
(js/setInterval doLending DURATION)
