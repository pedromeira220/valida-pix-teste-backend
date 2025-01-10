import { PixTransaction as PrismaPixTransaction } from "@prisma/client";
import { PixTransaction } from "../entities/pix-transaction";


export class PixTransactionMapper {
  static fromDomainToPrisma(pixTransaction: PixTransaction): PrismaPixTransaction {
    return {
      customerId: pixTransaction.customerId.toString(),
      date: pixTransaction.date,
      id: pixTransaction.id.toString(),
      senderKey: pixTransaction.senderKey,
      valueInCents: pixTransaction.valueInCents
    }
  }

  static fromDomainToHttp(pixTransaction: PixTransaction) {
    return {
      customerId: pixTransaction.customerId.toString(),
      date: pixTransaction.date,
      id: pixTransaction.id.toString(),
      senderKey: pixTransaction.senderKey,
      valueInCents: pixTransaction.valueInCents
    }
  }

  static fromPrismaToHttp(pixTransaction: PrismaPixTransaction) {
    return {
      customerId: pixTransaction.customerId,
      date: pixTransaction.date,
      id: pixTransaction.id,
      senderKey: pixTransaction.senderKey,
      valueInCents: pixTransaction.valueInCents
    }
  }
}