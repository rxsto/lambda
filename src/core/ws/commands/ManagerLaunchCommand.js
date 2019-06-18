const Command = require('../core/commands/Command');

class ShardLaunchCommand extends Command {

  constructor(client) {
    super('managerlaunch');
    this.client = client;
  }

  run() {
    this.client.launch();
  }
}

module.exports = ShardLaunchCommand;
