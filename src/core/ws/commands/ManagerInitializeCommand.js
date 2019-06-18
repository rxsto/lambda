const { ShardingManager } = require('discord.js');
const Command = require('../core/commands/Command');
const Message = require('../entities/Message');

class ShardLaunchCommand extends Command {

  constructor(client) {
    super('managerinitialize');
    this.client = client;
  }

  async run(data) {
    this.client.log.info(`[ShardingManager] Initializing ${data.shards.length} shards from ${data.shards[0]} to ${data.shards[data.shards.length - 1]}`);
    this.client.manager = await new ShardingManager('./src/Shard.js', {
      totalShards: data.total,
      shardList: data.shards
    });
    this.client.manager.partialShards = data.shards.length;
    this.client.ws.send(this.client.message.encode(new Message('podlaunchable', this.client.id).get()));
  }
}

module.exports = ShardLaunchCommand;
