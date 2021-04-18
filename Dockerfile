FROM node:14-alpine as build-js
WORKDIR /usr/src/app
COPY package*.json /usr/src/app
RUN npm install

FROM clojure:latest as build-clojure
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY --from=build-js /usr/src/app/node_modules /usr/src/app/node_modules
RUN clj -m cljs.main --target node --output-to main.js -c ftx-lending.core

FROM node:14-alpine
WORKDIR /usr/src/app
COPY --from=build-js /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build-clojure /usr/src/app/.cljs_node_repl /usr/src/app/.cljs_node_repl
COPY --from=build-clojure /usr/src/app/main.js /usr/src/app
ENTRYPOINT ["node", "main.js"]
