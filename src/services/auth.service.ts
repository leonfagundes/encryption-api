import { prisma } from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export async function registerUser(data: { username: string, email: string, password: string }) {
  const existing = await prisma.user.findUnique({ where: { email: data.email } });
  if (existing) throw new Error('Email já registrado');

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await prisma.user.create({
    data: {
      email: data.email,
      username: data.username,
      password: hashedPassword,
    },
  });

  return { message: 'Usuário criado com sucesso', user: { id: user.id, email: user.email } };
}

export async function loginUser(data: { email: string, password: string }) {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) throw new Error('Usuário não encontrado');

  const passwordMatch = await bcrypt.compare(data.password, user.password);
  if (!passwordMatch) throw new Error('Senha incorreta');

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
  return { token, username:user.username};
}
