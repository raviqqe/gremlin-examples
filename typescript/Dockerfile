FROM node

ADD . /gremlin

WORKDIR /gremlin

RUN rm -rf node_modules
RUN npm install
RUN npm run build

ENV endpoint ""

ENTRYPOINT node dist/initialize.js $endpoint

CMD node dist/index.js $endpoint
