import { Router } from "express";
import { registerUserController } from "./register-user-controller";
import { registerPixController } from "./register-pix-controller";

const appRouter = Router()

appRouter.post("/clients", async (req, res) => {
  return registerUserController(req, res)
})

appRouter.post("/clients/pix", async (req, res) => {
  return registerPixController(req, res)
})

export { appRouter }