import { Request, Response } from "express";
import { prisma } from "../../database/prisma";
import { PixTransactionMapper } from '../../mappers/pix-transaction-mapper';
import { getCustomerIdFromJWT } from '../../utils/get-customer-id-from-jwt';

export const fetchPixTransactionsController = async (req: Request, res: Response) => {
  const { customerId } = getCustomerIdFromJWT(req)

    const pixTransactionList = await prisma.pixTransaction.findMany({
      where: {
        customerId
      }
    })

    return res.status(200).json({
      pixTransactions: pixTransactionList.map(PixTransactionMapper.fromPrismaToHttp)
    })
}
