/* eslint-disable no-console */
const { markup, foreground } = require('./Escapes');

class Logger {

  constructor(client) {
    this.client = client;
  }

  debug(text) {
    return console.log(`[${getCurrentTime()}] ${this.client.shard ? getShard(this.client.shard) : ''} ${markup.bright}${foreground.yellow}[DEBUG]${markup.reset} » ${text}`);
  }

  info(text) {
    return console.log(`[${getCurrentTime()}] ${this.client.shard ? getShard(this.client.shard) : ''} ${markup.bright}${foreground.cyan}[INFO ]${markup.reset} » ${text}`);
  }

  warn(text) {
    return console.log(`[${getCurrentTime()}] ${this.client.shard ? getShard(this.client.shard) : ''} ${markup.bright}${foreground.magenta}[WARN ]${markup.reset} » ${text}`);
  }

  error(text) {
    return console.log(`[${getCurrentTime()}] ${this.client.shard ? getShard(this.client.shard) : ''} ${markup.bright}${foreground.red}[ERROR]${markup.reset} » ${text}`);
  }
}

function getShard(shard) {
  return `[SHARD ${'0'.repeat(shard.count.toString().length - (shard.count.toString().split('').pop() == 0 ? shard.ids[0].toString().length + 1 : shard.ids[0].toString().length)) + shard.ids[0].toString()}]`;
}

function getCurrentTime() {
  const date = new Date();
  return [(date.getMonth()+1).padLeft(), date.getDate().padLeft(), date.getFullYear()].join('-') + ' ' + [date.getHours().padLeft(), date.getMinutes().padLeft(), date.getSeconds().padLeft()].join(':');
}

Number.prototype.padLeft = function(base,chr){
  var len = (String(base || 10).length - String(this).length) + 1;
  return len > 0 ? new Array(len).join(chr || '0') + this : this;
};

module.exports = Logger;
