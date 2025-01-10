import { Router } from "express";
import { registerUserController } from "./register-user-controller";
import { registerPixController } from "./register-pix-controller";
import { fetchPixTransactionsController } from "./fetch-pix-transactions-controller";

const appRouter = Router()

appRouter.post("/clients", async (req, res) => {
  return registerUserController(req, res)
})

appRouter.post("/clients/pix", async (req, res) => {
  return registerPixController(req, res)
})

appRouter.get("/clients/pix", async (req, res) => {
  return fetchPixTransactionsController(req, res)
})

export { appRouter }