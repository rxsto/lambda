require('dotenv').config();

const Manager = require('./src/Manager');

const ShardingManager = new Manager();

ShardingManager.initialize();
