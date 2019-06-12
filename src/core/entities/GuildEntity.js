class GuildEntity {

  constructor(client, { id, prefix }) {
    this.client = client;
    this.id = id;
    this.prefix = prefix;
  }

  update() {
    this.client.database.db(process.env.DATABASE_NAME).collection('guilds');
  }
}

module.exports = GuildEntity;
