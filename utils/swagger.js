const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ford Long Khanh API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*Route.js"],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = {
  swaggerSpec,
};
