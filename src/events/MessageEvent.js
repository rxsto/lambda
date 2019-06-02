const Event = require('../core/events/Event');

class MessageEvent extends Event {

  constructor(client) {
    super(client, 'message');
  }

  async run(message) {
    this.client.commandHandler.handle(message);
  }
}

module.exports = MessageEvent;
