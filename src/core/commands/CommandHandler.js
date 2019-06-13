const CommandStore = require('./CommandStore');
const GuildEntity = require('../entities/GuildEntity');

class CommandHandler {

  constructor(client) {
    this.client = client;
    this.commandStore = new CommandStore(this.client);
  }

  handle(message) {
    if (message.author.bot) return;

    // if (!this.client.guildCache.has(message.guild.id)) {
    //   this.client.guildCache.set(message.guild.id, new GuildEntity({
    //     client: this.client,
    //     id: message.guild.id,
    //     prefix: this.client.defaultPrefix
    //   }));
    // }

    // const prefix = this.client.guildCache.get(message.guild.id).prefix;

    const prefix = process.env.PREFIX;

    if (!message.content.startsWith(prefix)) return;

    const trigger = message.content.substring(prefix.length).split(' ')[0];
    const content = message.content.substring(prefix.length).split(' ').slice(1).join(' ');

    if (!this.commandStore.has(trigger)) return;

    return this.commandStore.get(trigger).run(message, content);
  }
}

module.exports = CommandHandler;
