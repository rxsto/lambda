const CommandStore = require('./CommandStore');

class CommandHandler {

  constructor(client) {
    this.client = client;
    this.commandStore = new CommandStore(this.client);
  }

  handle(message) {
    this.commandStore.forEach(command => {
      if (message.author.bot) return;

      // TODO: Implement guild-specific prefixes
      const prefix = process.env.PREFIX;

      if (!message.content.startsWith(prefix)) return;

      const trigger = message.content.substring(1).split(' ')[0];
      const content = message.content.substring(1).split(' ').slice(1).join(' ');

      let executors = command.aliases;
      executors.push(command.name);

      if (!executors.includes(trigger)) return;

      this.commandStore.get(trigger).run(message, content);
    });
  }
}

module.exports = CommandHandler;
