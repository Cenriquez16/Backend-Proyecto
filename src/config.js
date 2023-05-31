import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 4000,
  dbUser: process.env.DB_USER || "adminsql",
  dbPassword: process.env.DB_PASSWORD || "Admin1234",
  dbServer: process.env.DB_SERVER || "sqlrivera.database.windows.net",
  dbDatabase: process.env.DB_DATABASE || "",
  dbPort: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 1433,
  // dbPort: process.env.DB_PORT || 1433,
  dbDialect: process.env.DB_DIALECT || "mssql",
  dbDialectOptions: {
    instanceName: process.env.DB_DIALECT_OPTIONS_INSTANCE_NAME || "SQLDEV",
  }
};