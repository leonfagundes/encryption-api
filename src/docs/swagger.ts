import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Criptografia de César',
      version: '1.0.0',
      description: 'API para criptografar e decriptografar mensagens usando a cifra de César',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['src/routes/*.ts'], // arquivos com comentários @swagger
};

export const swaggerSpec = swaggerJSDoc(options);
