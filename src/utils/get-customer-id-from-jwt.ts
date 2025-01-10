import { Request } from "express";
import { InternalServerError } from "../errors/api-error";

export const getCustomerIdFromJWT = (req: any) => {

  if(!req) {
    console.log("> req não foi passado");
    throw new InternalServerError("Erro interno do servidor")
  }

  const customerId = req.customerId

  if(!customerId) {
    console.log("> customerId não presente na request");
    throw new InternalServerError("Erro interno do servidor")
  }

  return {
    customerId: customerId as string
  }
}