import { PrismaClient } from "../../db/client";

const prisma = new PrismaClient();

const isConnected = async () => {
  try {
    await prisma.$connect();
    console.log("DB CONNECT SUCCESS!");
  } catch (error) {
    console.log((error as Error).message);
    console.log("ERR! Connecting to DB!");
  }
};

isConnected();

export default prisma;
