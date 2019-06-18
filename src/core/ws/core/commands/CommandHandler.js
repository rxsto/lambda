const CommandStore = require('./CommandStore');

class CommandHandler {

  constructor(client) {
    this.client = client;
    this.commandStore = new CommandStore(client);
  }

  handle(data) {
    const message = this.client.message.decode(data);
    return this.commandStore.get(message.t).run(message.d);
  }
}

module.exports = CommandHandler;
