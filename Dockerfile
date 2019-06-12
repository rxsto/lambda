FROM node:11-alpine

WORKDIR /opt/rxsto/lambda/bot

COPY . .

RUN npm install

CMD [ "npm", "start" ]
