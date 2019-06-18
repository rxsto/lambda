class MessageUtil {

  constructor(client) {
    this.client = client;
  }

  decode(message) {
    return JSON.parse(message);
  }

  encode(message) {
    return JSON.stringify(message);
  }
}

module.exports = MessageUtil;
