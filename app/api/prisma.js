// lib/prisma.js
import { PrismaClient } from '@prisma/client';

let prisma;

// Ensure the Prisma Client is instantiated only once
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(); // In production, a single instance is sufficient
} else {
  // In development, attach Prisma to the global object to prevent multiple instances
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;