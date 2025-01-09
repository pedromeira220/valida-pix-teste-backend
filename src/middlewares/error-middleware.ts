import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../errors/api-error'

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error)

  if(error instanceof ApiError) {
    const statusCode = error.statusCode ?? 500
    const message = error.statusCode ? error.message : 'Internal Server Error'
    const codeError = error.codeError ? error.codeError : 'error'

    return res
    .status(statusCode)
    .json({ error: true, msg: message, code: codeError })
  }

  return res
    .status(500)
    .json({ error: true, msg: "Internal Server error", code: 'error' })
}
