const Joi = require('joi')

export const validationSchema = Joi.object({
    APP_ENV: Joi.string()
        .valid('development', 'production', 'test', 'local')
        .default('local').required(),
    APP_NAME: Joi.string().required(),
    APP_HOST: Joi.string().required(),
    APP_PORT: Joi.number().required(),
    JWT_SECRET: Joi.string().required(),
    JWT_KEY_EXP: Joi.string().required(),
    DB_SQL_ENABLED: Joi.boolean().required(),
    DB_SQL_HOSTNAME: Joi.string().optional(),
    DB_SQL_PORT: Joi.number().optional(),
    DB_SQL_NAME: Joi.string().optional(),
    DB_MONGO_ENABLED: Joi.boolean().required(),
    DB_MONGO_HOSTNAME: Joi.string().optional(),
    DB_MONGO_PORT: Joi.number().optional(),
    DB_MONGO_NAME: Joi.string().optional(),
    APP_CONTEXT: Joi.string().required(),
    APP_ORIGINS: Joi.string().required(),
    APP_ALLOWED_HEADERS: Joi.string().required(),
    APP_ALLOWED_METHODS: Joi.string().required(),
    APP_CORS_ENABLED: Joi.boolean().required(),
    APP_SWAGGER_ENABLED: Joi.boolean().required(),
    APP_SWAGGER_PATH: Joi.string().required()
})