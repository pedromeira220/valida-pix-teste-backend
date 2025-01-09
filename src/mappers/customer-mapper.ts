// import { Customer } from "../entities/customer";

import { Customer as PrismaCustomer } from "@prisma/client";
import { Customer } from "../entities/customer";

export class CustomerMapper {
  static fromDomainToPrisma(customer: Customer): PrismaCustomer {
    return {
      cpf: customer.cpf,
      createdAt: customer.createdAt,
      id: customer.id.toString(),
      name: customer.name,
      passwordHash: customer.passwordHash
    }
  }

  static fromDomainToHttp(customer: Customer) {
    return {
      id: customer.id.toString(),
      name: customer.name,
      createdAt: customer.createdAt,
      cpf: customer.cpf
    }
  }
}