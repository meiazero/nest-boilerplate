import { AppConfig } from "./interfaces/app-config";

export default (): AppConfig => ({
  server: {
    url: process.env.NEST_API_SERVER_URL!,
    port: parseInt(process.env.NEST_API_PORT!),
  },

  database: {
    postgres: {
      name: process.env.POSTGRES_NAME,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      url: process.env.POSTGRES_DATABASE_URL!,
    },
  },

  auth: {
    jwt: {
      secret: process.env.JWT_SECRET!,
      expiresInSeconds:
        parseInt(process.env.JWT_EXPIRATION_TIME_SECONDS!) || 900,
    },
  },
});
