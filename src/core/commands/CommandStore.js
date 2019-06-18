const fs = require('fs');
const path = require('path');

class CommandStore extends Map {
  
  constructor(client) {
    super();
    this.client = client;
    this.storeCommands(path.join(process.cwd(), './src/commands/'));
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
