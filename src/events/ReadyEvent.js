const Event = require('../core/events/Event');

class ReadyEvent extends Event {

  constructor(client) {
    super(client, 'ready');
  }

  run() {
    this.client.log.info('Ready');
  }
}

module.exports = ReadyEvent;
