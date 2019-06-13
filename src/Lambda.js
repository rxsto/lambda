const Discord = require('discord.js');
const Logger = require('./core/util/Logger');
const Database = require('./core/io/Database');
const EventHandler = require('./core/events/EventHandler');
const CommandHandler = require('./core/commands/CommandHandler');
const Cache = require('./core/cache/Cache');

class Lambda extends Discord.Client {

  constructor() {
    super();

    this.defaultPrefix = process.env.PREFIX;

    this.log = new Logger();
    this.database = new Database(this);
    this.eventHandler = new EventHandler(this);
    this.commandHandler = new CommandHandler(this);
    this.userCache = new Cache(this);
    this.guildCache = new Cache(this);
  }

  async initialize() {
    await this.database.connect();
    await this.userCache.initialize(this.database.db(process.env.DB_DATABASE).collection('users'));
    await this.guildCache.initialize(this.database.db(process.env.DB_DATABASE).collection('guilds'));
    await this.login((process.env.DEBUG ? process.env.DISCORD_TOKEN_DEBUG : process.env.DISCORD_TOKEN)).then(this.log.info('[Login] Successfully logged into Discords API')).catch(error => this.log.error(error));
  }
}

module.exports = Lambda;
