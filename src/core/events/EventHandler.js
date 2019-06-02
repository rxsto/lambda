const EventStore = require('./EventStore');

class EventHandler {
  
  constructor(client) {
    this.client = client;
    this.eventStore = new EventStore(this.client);
    this.initializeEvents();
  }

  initializeEvents() {
    this.eventStore.forEach(event => {
      this.client.on(event.name, event.run.bind(event));
    });
  }
}

module.exports = EventHandler;
