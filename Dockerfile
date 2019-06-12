FROM node:11-alpine

WORKDIR /opt/rxsto/lambda/bot

RUN apk update && apk upgrade && apk add --no-cache git

COPY . .

RUN npm install

CMD [ "npm", "start" ]
