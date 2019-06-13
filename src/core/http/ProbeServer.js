const Server = require('express');

class ProbeServer {

  constructor(client) {
    this.client = client;
    this.server = Server();
  }

  initialize() {
    this.server.get('/health', (request, response) => {
      if (this.client.isHealthy()) {
        response.status(200).end();
      } else {
        response.status(503).end();
      }
    });
    this.server.get('/ready', (request, response) => {
      if (this.client.isReady()) {
        response.status(200).end();
      } else {
        response.status(503).end();
      }
    });
    this.server.get('/shutdown', (request, response) => response.status(200).end());
    this.server.listen(process.env.PROBE_SERVER_PORT, () => this.client.log.info('[ProbeServer] Health and Ready probes are available'));
  }
}

module.exports = ProbeServer;
