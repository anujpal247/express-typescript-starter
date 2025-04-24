import { config } from "dotenv";

function loadEnv() {
  config();
}

loadEnv();
console.log("Environment variables loaded.");

type ServerConfig = {
  PORT: number;
};

export const ServerConfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 3000,
};
