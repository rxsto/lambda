const fs = require('fs');
const Discord = require('discord.js');

const { join } = require('path');

class EventStore extends Discord.Collection {
  
  constructor(client) {
    super();
    this.client = client;
    this.storeEvents(join(process.cwd(), './src/events/'));
  }

  storeEvents(directory) {
    fs.readdirSync(directory).forEach(file => {
      const event = require(directory + file);
      const instance = new event(this.client);
      this.set(instance.name, instance);
    });
  }
}

module.exports = EventStore;
