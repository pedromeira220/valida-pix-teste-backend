import express from 'express'
import 'express-async-errors'
import { customerRouter } from './http/controllers/customers/routes'
import { errorMiddleware } from './middlewares/error-middleware'

const app = express()

app.use(express.json())
app.use(customerRouter)

app.use(errorMiddleware)

export { app };
