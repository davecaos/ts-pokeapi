type TEnv = string | number | undefined;

type TServer = {
  port: TEnv;
  killTimeout: TEnv;
};

type TPokeAPI = {
  api: TEnv;
};

type TConfig = {
  server: TServer;
  pokemon: TPokeAPI;
};

export { TConfig, TEnv };
