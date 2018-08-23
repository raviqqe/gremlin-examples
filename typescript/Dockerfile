FROM node

ADD . /gremlin

WORKDIR /gremlin

RUN rm -rf node_modules
RUN npm install

ENV endpoint ""

CMD npm run initialize $endpoint && npm run serve $endpoint
