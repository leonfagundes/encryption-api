import { Request, Response } from 'express';
import * as CryptoService from '../services/crypto.service';

export async function encrypt(req: Request, res: Response) {
  try {
    const { message, shift } = req.body;
    const result = await CryptoService.encryptMessage(message, Number(shift));
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criptografar', error });
  }
}

export async function decrypt(req: Request, res: Response) {
  try {
    const { encrypted, hash } = req.body;
    const result = await CryptoService.decryptMessage(encrypted, hash);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao decriptografar', error });
  }
}

export async function verifyHash(req: Request, res: Response) {
  try {
    const { hash } = req.body;
    const result = await CryptoService.verifyHashService(hash);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao verificar hash', error });
  }
}
