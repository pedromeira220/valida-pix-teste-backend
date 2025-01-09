import { PixTransaction } from './../../entities/pix-transaction';
import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { z } from "zod"
import { prisma } from "../../database/prisma";
import { Customer } from "../../entities/customer";
import { CustomerMapper } from "../../mappers/customer-mapper";
import { BadRequestError } from "../../errors/api-error";
import { UniqueEntityID } from '../../entities/unique-entity-id';
import { PixTransactionMapper } from '../../mappers/pix-transaction-mapper';

const registerPixBodySchema = z.object({
  value: z.number(),
  senderKey: z.string().min(1, "Campo obrigatório"),
  customerId: z.string() // Temporário até implementar o sistema de autenticação
})

export const registerPixController = async (req: Request, res: Response) => {
  const { value,senderKey,customerId } = registerPixBodySchema.parse(req.body)

    const pixTransaction = PixTransaction.create({
      customerId: new UniqueEntityID(customerId),
      date: new Date(),
      senderKey,
      valueInCents: value * 100
    })

    await prisma.pixTransaction.create({
      data: PixTransactionMapper.fromDomainToPrisma(pixTransaction)
    })

    return res.status(201).json({
      pixTransaction: PixTransactionMapper.fromDomainToHttp(pixTransaction)
    })
}
