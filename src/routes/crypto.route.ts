import { Router } from 'express';
import * as CryptoController from '../controllers/crypto.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * /crypto/encrypt:
 *   post:
 *     tags: [Crypto]
 *     summary: Criptografa uma mensagem usando a cifra de César
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *               shift:
 *                 type: integer
 *             required:
 *               - message
 *               - shift
 *     responses:
 *       200:
 *         description: Mensagem criptografada com hash gerado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 encrypted:
 *                   type: string
 *                 hash:
 *                   type: string
 *       401:
 *         description: Token JWT não fornecido ou inválido
 */
router.post('/encrypt', authenticateToken, CryptoController.encrypt);

/**
 * @swagger
 * /crypto/decrypt:
 *   post:
 *     tags: [Crypto]
 *     summary: Decriptografa uma mensagem com hash válido
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               encrypted:
 *                 type: string
 *               hash:
 *                 type: string
 *             required:
 *               - encrypted
 *               - hash
 *     responses:
 *       200:
 *         description: Mensagem original descriptografada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 decrypted:
 *                   type: string
 *       400:
 *         description: Hash inválido ou já utilizado
 *       401:
 *         description: Token JWT não fornecido ou inválido
 */
router.post('/decrypt', authenticateToken, CryptoController.decrypt);

export { router as cryptoRouter };
