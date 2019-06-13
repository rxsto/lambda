const Discord = require('discord.js');
const Logger = require('./core/util/Logger');
const OS = require('os');

class Manager extends Discord.ShardingManager {

  constructor() {
    super('./src/Shard.js', {
      token: process.env.DEBUG ? process.env.DISCORD_TOKEN_DEBUG : process.env.DISCORD_TOKEN,
      totalShards: Number(process.env.TOTAL_SHARDS)
    });
    this.log = new Logger();
    this.id = process.env.DEBUG ? 0 : Number(OS.hostname().split('-').pop());
  }

  initialize() {
    const shard = this.createShard(this.id);
    shard.spawn();
  }
}

module.exports = Manager;
