FROM clojure:latest as build
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN clj -m cljs.main --target node --output-to main.js -c ftx-lending.core

FROM node:14-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/.cljs_node_repl /usr/src/app/.cljs_node_repl
COPY --from=build /usr/src/app/main.js /usr/src/app
COPY package*.json /usr/src/app
RUN npm install
ENTRYPOINT ["node", "main.js"]