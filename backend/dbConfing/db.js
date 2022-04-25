import pkg from "@prisma/client";
const { PrismaClient } = pkg;

export default new PrismaClient();
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"],
  });
if (process.env.NODE_ENV !== "production") global.prisma = prisma;
