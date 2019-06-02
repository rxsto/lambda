class Event {

  constructor(client, name) {
    this.client = client;
    this.name = name;
  }

  run() {
    throw new SyntaxError('This method needs to be overwritten inside the actual event!');
  }
}

module.exports = Event;
