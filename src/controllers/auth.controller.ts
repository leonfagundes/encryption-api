import { Request, Response } from 'express';
import * as AuthService from '../services/auth.service';

export async function register(req: Request, res: Response) {
  try {
    const result = await AuthService.registerUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao registrar usuário', error });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const result = await AuthService.loginUser(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ message: 'Credenciais inválidas', error });
  }
}
