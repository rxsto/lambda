class Message {

  constructor(command, data) {
    this.command = command;
    this.data = data;
  }

  get() {
    return {
      t: this.command,
      d: this.data
    };
  }
}

module.exports = Message;
