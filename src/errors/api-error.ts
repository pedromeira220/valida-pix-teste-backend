export class ApiError extends Error {
  public readonly statusCode: number
  public codeError?: string

  constructor(message: string, statusCode: number, codeError?: string) {
    super(message)
    this.statusCode = statusCode
    this.codeError = codeError
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, 400)
  }
}

export class NoPermissionError extends ApiError {
  constructor(message: string, codeError?: string) {
    super(message, 401, codeError)
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404)
  }
}

export class RequiredFieldError extends ApiError {
  constructor(message: string) {
    super(message, 422)
  }
}

export class ForbiddenError extends ApiError {
  constructor(message: string) {
    super(message, 403)
  }
}
