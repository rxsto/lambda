const Discord = require('discord.js');
const OS = require('os');

class Manager extends Discord.ShardingManager {

  constructor() {
    super('./src/Shard.js', {
      token: process.env.DEBUG ? process.env.DISCORD_TOKEN_DEBUG : process.env.DISCORD_TOKEN,
      totalShards: Number(process.env.TOTAL_SHARDS)
    });
    this.id = process.env.DEBUG == true ? 0 : Number(OS.hostname().split('-').pop());
  }

  initialize() {
    const shard = this.createShard(this.id);
    shard.spawn(60000);
  }
}

module.exports = Manager;
