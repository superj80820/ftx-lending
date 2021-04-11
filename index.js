const got = require("got");
const crypto = require("crypto");

const API_KEY = process.argv[2];
const API_SECRET = process.argv[3];
const REQUIRELENDINGS = process.argv[4].split(",");
const DURATION = process.argv[5];
const BASE_URL = "https://ftx.com";

const authHeader = (method) => (postPayloadString) => (path) => (
  timestamp
) => ({
  "FTX-SIGN": crypto
    .createHmac("sha256", API_KEY)
    .update(`${timestamp}${method}${path}${postPayloadString}`)
    .digest("hex"),
  "FTX-KEY": API_SECRET,
  "FTX-TS": `${timestamp}`,
});

const createGetHeader = authHeader("GET")("");
const createPostHeader = authHeader("POST");

const getBalances = (timestamp) => {
  const path = "/api/wallet/balances";
  return got(`${BASE_URL}/${path}`, {
    headers: createGetHeader(path)(timestamp),
  })
    .json()
    .then((res) => res);
};

const getOffers = (timestamp) => {
  const path = "/api/spot_margin/offers";
  return got(`${BASE_URL}/${path}`, {
    headers: createGetHeader(path)(timestamp),
  })
    .json()
    .then((res) => res);
};

const submitOffer = (timestamp) => (coin) => (size) => (rate) => {
  const path = "/api/spot_margin/offers";
  const payload = { coin, size, rate };
  return got
    .post(`${BASE_URL}/${path}`, {
      headers: createPostHeader(JSON.stringify(payload))(path)(timestamp),
      json: payload,
    })
    .json()
    .then((res) => res);
};

const getResultByCoin = (results) => (coin) =>
  results.reduce((a, b) => (b.coin === coin ? { ...b } : a), {});

const doLending = () => {
  const timestamp = new Date().getTime();
  getBalances(timestamp)
    .then((json) =>
      json.result.filter((balances) => REQUIRELENDINGS.includes(balances.coin))
    )
    .then((balances) =>
      Promise.all(
        balances.map((balance) =>
          submitOffer(timestamp)(balance.coin)(balance.total)(1e-6)
        )
      )
    )
    .then(() => Promise.all([getBalances(timestamp), getOffers(timestamp)]))
    .then(([balances, offers]) => [
      getResultByCoin(balances.result),
      getResultByCoin(offers.result),
    ])
    .then(([balances, offers]) =>
      REQUIRELENDINGS.map((coin) =>
        balances(coin).total === offers(coin).size
          ? `${coin} now: ${balances(coin).total}`
          : `${coin} error`
      )
    )
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
};

doLending();
setInterval(doLending, DURATION);
