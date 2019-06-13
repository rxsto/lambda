const Event = require('../core/events/Event');

class ReadyEvent extends Event {

  constructor(client) {
    super(client, 'ready');
  }

  run() {
    this.client.ready = true;
    this.client.log.info(`[ReadyEvent] Lambda launched with ${this.client.guilds.size} guilds and ${this.client.users.size} users`);
  }
}

module.exports = ReadyEvent;
