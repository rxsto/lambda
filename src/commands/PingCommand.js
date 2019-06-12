const Command = require('../core/commands/Command');

class PingCommand extends Command {

  constructor(client) {
    super(client, {
      name: 'ping',
      description: 'Calculates current ping',
      usage: '',
      aliases: ['pong']
    });
  }

  run(message) {
    const call = Date.now();
    return message.channel.send('Calculating ...').then(message => {
      const back = Date.now();
      message.edit(`${back - call}ms`);
    });
  }
}

module.exports = PingCommand;
