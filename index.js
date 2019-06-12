require('dotenv').config();

const Manager = require('./src/Manager');
const ShardingManager = new Manager();
ShardingManager.initialize();

// const { ShardingManager } = require('discord.js');
// const manager = new ShardingManager('./src/Lambda.js', { token: process.env.DISCORD_TOKEN_DEBUG });

// manager.spawn();
// manager.on('launch', shard => console.log(`Launched shard ${shard.id}`)); /* eslint-disable-line */

// const BaseClient = require('./src/Lambda');
// const Client = new BaseClient();
// Client.initialize();
