class Command {

  constructor(client, { name, description, usage, aliases }) {
    this.client = client;
    this.name = name;
    this.description = description;
    this.usage = usage;
    this.aliases = aliases;
  }

  run() {
    throw new SyntaxError('This method needs to be overwritten inside the actual command!');
  }
}

module.exports = Command;
