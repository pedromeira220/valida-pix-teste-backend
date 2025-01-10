import { PixTransaction } from './../../entities/pix-transaction';
import { Request, Response } from "express";
import { z } from "zod"
import { prisma } from "../../database/prisma";
import { UniqueEntityID } from '../../entities/unique-entity-id';
import { PixTransactionMapper } from '../../mappers/pix-transaction-mapper';

const fetchPixTransactionsQuerySchema = z.object({
  customerId: z.string().uuid() // Temporário até implementar sistema de auth
})

export const fetchPixTransactionsController = async (req: Request, res: Response) => {
  const { customerId } = fetchPixTransactionsQuerySchema.parse(req.query)

    const pixTransactionList = await prisma.pixTransaction.findMany({
      where: {
        customerId
      }
    })

    return res.status(200).json({
      pixTransactions: pixTransactionList.map(PixTransactionMapper.fromPrismaToHttp)
    })
}
