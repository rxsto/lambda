const Command = require('../core/commands/Command');

class PrefixCommand extends Command {

  constructor(client) {
    super(client, {
      name: 'prefix',
      description: 'Allows you to change the prefix',
      usage: '<newPrefix>',
      aliases: []
    });
  }

  run(message, content) {
    const guild = this.client.guildCache.get(message.guild.id);

    guild.prefix = content;
    guild.update();
  }
}

module.exports = PrefixCommand;
