import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger';
import { authRouter } from './routes/auth.route';
import { cryptoRouter } from './routes/crypto.route';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/auth', authRouter);
app.use('/crypto', cryptoRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT} ✅`);
});
