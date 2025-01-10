import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { env } from "../env";
import { NoPermissionError } from "../errors/api-error";

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new NoPermissionError('Token não fornecido', 'invalid-token')

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET);
    console.log("> decoded", decoded);
    
    // @ts-ignore to ignore the type checking errors on the next line
    req.customerId = decoded.id
    next()
  } catch (err) {
    throw new NoPermissionError('Token inválido', 'invalid-token')
  }
}