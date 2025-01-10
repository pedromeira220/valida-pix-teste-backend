import { Request, Response } from "express";
import { z } from "zod"
import { prisma } from "../../database/prisma";
import { BadRequestError, NoPermissionError } from "../../errors/api-error";
import { PixTransactionMapper } from '../../mappers/pix-transaction-mapper';
import { compareSync } from "bcryptjs";
import jwt from 'jsonwebtoken';
import { env } from "../../env";

const loginCustomerBodySchema = z.object({
  cpf: z.string(),
  password: z.string()
})

export const loginCustomerController = async (req: Request, res: Response) => {
  const { cpf, password } = loginCustomerBodySchema.parse(req.body)

    const customerFound = await prisma.customer.findFirst({
      where: {
        cpf
      }
    })

    if(!customerFound) {
      throw new NoPermissionError("CPF ou senha inválidos")
    }

    const isPasswordValid = compareSync(password, customerFound.passwordHash);

    if(!isPasswordValid) {
      throw new NoPermissionError("CPF ou senha inválidos")
    }

    const token = jwt.sign({ id: customerFound.id }, env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({
      token
    })
}
