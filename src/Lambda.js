const Discord = require('discord.js');
const Logger = require('./core/util/Logger');
const EventHandler = require('./core/events/EventHandler');
const CommandHandler = require('./core/commands/CommandHandler');

class Lambda extends Discord.Client {

  constructor() {
    super();
    this.log = new Logger();
    this.eventHandler = new EventHandler(this);
    this.commandHandler = new CommandHandler(this);
  }
}

module.exports = Lambda;
