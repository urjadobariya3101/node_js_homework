const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const envVarsSchema = Joi.object({
  PORT: Joi.number().default(3000),
  MONGODB_URL: Joi.string().trim().description("Mongodb url"),
  BASE_URL: Joi.string().trim().description("Base URL"),
  JWT_SECRET_KEY: Joi.string().description("Jwt sectreat key")
}).unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  console.log("Config Error: ", error);
  process.exit(1);
}

module.exports = {
  port: envVars.PORT,
  mongodb: {
    url: envVars.MONGODB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  base_url: envVars.BASE_URL,
  jwt: {
    secret_key: envVars.JWT_SECRET_KEY,
  },
};