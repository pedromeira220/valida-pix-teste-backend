import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../errors/api-error'
import { ZodError } from 'zod'

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error)

  if(error instanceof ZodError) {
    const statusCode = 404
    const message = "Campos inválidos"
    const codeError = "validation-error"

    return res
    .status(statusCode)
    .json({ error: true, msg: message, code: codeError, data: error.format() })
  }

  if(error instanceof ApiError) {
    const statusCode = error.statusCode ?? 500
    const message = error.statusCode ? error.message : 'Erro interno do servidor'
    const codeError = error.codeError ? error.codeError : 'error'

    return res
    .status(statusCode)
    .json({ error: true, msg: message, code: codeError })
  }

  return res
    .status(500)
    .json({ error: true, msg: "Erro interno do servidor", code: 'error' })
}
