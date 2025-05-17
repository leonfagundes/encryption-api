import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Token não fornecido' });
    return;
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) 
        res.status(403).json({ message: 'Token inválido' });
    
    (req as any).user = user;
    next();
  });
}
