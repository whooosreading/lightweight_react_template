FROM alpine:3.5

RUN apk update && apk add nodejs

EXPOSE 80

# npm install in tmp director so caching can be used
COPY appdev/package*.json /tmp/
WORKDIR /tmp
RUN npm install

COPY appdev /webapp
WORKDIR /webapp

# Move in the node files
RUN mv /tmp/node_modules . && npm run webpack