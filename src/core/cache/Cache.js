const Discord = require('discord.js');

class Cache extends Discord.Collection {

  constructor(client) {
    super();
    this.client = client;
    this.collection = null;
  }

  update(entity) {
    if (!this.has(entity.id)) {
      this.client.log.warn(`[Cache] The cache didn't contain an entity with the id ${entity.id}! Inserting ...`);
    }

    this.set(entity.id, entity);
  }

  async initialize(collection) {
    this.collection = collection;
    await this.collection.find({}).forEach(user => {
      this.set(user.id, user);
    });
  }
}

module.exports = Cache;
