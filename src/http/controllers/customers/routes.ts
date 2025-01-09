import { Router } from "express";
import { registerUserController } from "../register-user-controller";

const customerRouter = Router()

customerRouter.post("/clients", async (req, res) => {
  return registerUserController(req, res)
})

export { customerRouter }