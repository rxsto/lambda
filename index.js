require('dotenv').config();

const Lambda = require('./src/Lambda');

const Client = new Lambda();

Client.login((process.env.DEBUG ? process.env.DISCORD_TOKEN_DEBUG : process.env.DISCORD_TOKEN));
