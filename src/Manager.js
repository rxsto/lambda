const Websocket = require('ws');
const CommandHandler = require('./core/ws/core/commands/CommandHandler');
const MessageUtil = require('./core/ws/utils/MessageUtil');
const Message = require('./core/ws/entities/Message');
const Logger = require('logger');
const OS = require('os');

class Manager {

  constructor() {
    this.id = process.env.DEBUG === 'true' ? 0 : Number(OS.hostname().split('-').pop());
    this.log = new Logger();
    this.ws = new Websocket(`ws://${process.env.WS_HOST}:${process.env.WS_PORT}`);
    this.handler = new CommandHandler(this);
    this.message = new MessageUtil(this);
  }

  initialize() {
    this.ws.on('open', () => {
      this.log.info(`[Websocket] Connected to Websocket server at ${this.ws.url}`);
      this.ws.send(this.message.encode(new Message('registerpod', this.id).get()));
    });

    this.ws.on('close', (code, reason) => {
      this.log.warn(`[Websocket] The connection was closed because of: ${reason} (${code})`);
    });

    this.ws.on('error', error => {
      this.log.error(error.message);
    });

    this.ws.on('message', data => {
      this.handler.handle(data);
    });
  }

  launch() {
    this.manager.spawn();
    this.manager.shards.forEach(shard => {
      shard.on('ready', () => {
        if (this.manager.readyShards === undefined) {
          this.manager.readyShards = new Array();
        }
        this.manager.readyShards.push(shard.id);
        if (this.manager.readyShards.length === this.manager.partialShards) {
          this.ws.send(this.message.encode(new Message('podready', this.id).get()));
        }
      });
    });
  }
}

module.exports = Manager;
