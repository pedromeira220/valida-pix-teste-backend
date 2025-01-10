import express from 'express'
import 'express-async-errors'
import { errorMiddleware } from './middlewares/error-middleware'
import { appRouter } from './http/controllers/routes'
import cors from "cors"

const app = express()

app.use(cors())

app.use(express.json())
app.use(appRouter)

app.use(errorMiddleware)

export { app };
