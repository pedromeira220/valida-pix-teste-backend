import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { z } from "zod"
import { prisma } from "../../database/prisma";
import { Customer } from "../../entities/customer";
import { CustomerMapper } from "../../mappers/customer-mapper";
import { BadRequestError } from "../../errors/api-error";

const registerUserBodySchema = z.object({
  name: z.string(),
  cpf: z.string(),
  password: z.string()
})

export const registerUserController = async (req: Request, res: Response) => {
  const { cpf,name,password } = registerUserBodySchema.parse(req.body)

  const passwordHash = await hash(password, 8)

    const customerWithSameCpf = await prisma.customer.findFirst({
      where: {
        cpf
      }
    })

    if(customerWithSameCpf) {
      throw new BadRequestError("Já existe um cliente com esse CPF")
    }

    const customer = Customer.create({
      cpf,
      name,
      passwordHash
    })

    await prisma.customer.create({
      data: CustomerMapper.fromDomainToPrisma(customer)
    })

    return res.status(201).json({
      customer: CustomerMapper.fromDomainToHttp(customer)
    })
}
