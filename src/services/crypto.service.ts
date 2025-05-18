import { prisma } from '../config/prisma';
import { caesarEncrypt, caesarDecrypt } from '../utils/caesarCipher';
import { randomUUID } from 'crypto';

export async function encryptMessage(message: string, shift: number) {
  const encrypted = caesarEncrypt(message, shift);
  const hash = randomUUID();

  await prisma.crypto.create({
    data: {
      hash,
      shift,
      used: false,
    },
  });

  return { encrypted, hash };
}

export async function decryptMessage(encrypted: string, hash: string) {
  const record = await prisma.crypto.findUnique({ where: { hash } });

  if (!record || record.used) 
    throw new Error('Hash inválido ou já utilizado');

  const decrypted = caesarDecrypt(encrypted, record.shift);

  await prisma.crypto.update({
    where: { hash },
    data: { used: true },
  });

  return { decrypted };
}

export async function verifyHashService (hash: string) {
  const record = await prisma.crypto.findUnique({ where: { hash } });

  if (!record) return false;

  return record.used;

}
