const fs = require('fs');
const Discord = require('discord.js');

const { join } = require('path');

class CommandStore extends Discord.Collection {
  
  constructor(client) {
    super();
    this.client = client;
    this.storeCommands(join(process.cwd(), './src/commands/'));
  }

  storeCommands(directory) {
    fs.readdirSync(directory).forEach(file => {
      const command = require(directory + file);
      const instance = new command(this.client);
      this.set(instance.name, instance);
      instance.aliases.forEach(alias => {
        this.set(alias, instance);
      });
    });
  }
}

module.exports = CommandStore;
