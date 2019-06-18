class Command {

  constructor(name) {
    this.name = name;
  }

  run() {
    throw 'This method should be overwritten in the actual command!';
  }
}

module.exports = Command;
