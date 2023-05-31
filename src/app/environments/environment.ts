import { readFileSync } from 'fs';

const fs = require('fs');
const dotenv = require('dotenv');

const envFile = readFileSync('.env');
const envConfig = dotenv.parse(envFile);

for (const k in envConfig) {
  if (envConfig.hasOwnProperty(k)) {
    process.env[k] = envConfig[k];
  }
}
