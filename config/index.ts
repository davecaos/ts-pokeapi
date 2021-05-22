import dotenv from 'dotenv';
import { TConfig } from './types';

dotenv.config();

const config: TConfig = {
  server: {
    port: process.env.SERVER_PORT,
    killTimeout: process.env.SERVER_KILLTIMEOUT,
  },
  pokemon: {
    api: process.env.POKEMON_API,
  },
};

export = config;
