import { Router } from "express";
import { registerUserController } from "./register-user-controller";
import { registerPixController } from "./register-pix-controller";
import { fetchPixTransactionsController } from "./fetch-pix-transactions-controller";
import { checkToken } from "../../middlewares/check-token";
import { loginCustomerController } from "./login-customer";

const appRouter = Router()

appRouter.post("/clients", async (req, res) => {
  return registerUserController(req, res)
})

appRouter.post("/clients/auth/login", async (req, res) => {
  return loginCustomerController(req, res)
})

appRouter.post("/clients/pix", checkToken, async (req, res) => {
  return registerPixController(req, res)
})

appRouter.get("/clients/pix", checkToken, async (req, res) => {
  return fetchPixTransactionsController(req, res)
})

export { appRouter }