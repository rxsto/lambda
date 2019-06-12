const Command = require('../core/commands/Command');

class EvalCommand extends Command {

  constructor(client) {
    super(client, {
      name: 'eval',
      description: 'Evaluates custom code',
      usage: '',
      aliases: ['ev']
    });
  }

  run(message, content) {
    return message.channel.send(content);
  }
}

module.exports = EvalCommand;
