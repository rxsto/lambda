const Mongo = require('mongodb');

class Database extends Mongo.MongoClient {

  constructor(client) {
    super(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, {
      useNewUrlParser: true
    });
    this.client = client;
    this.client.log.info(`[Database] Successfully connected to MongoDB at host ${process.env.DB_HOST}`);
  }
}

module.exports = Database;
