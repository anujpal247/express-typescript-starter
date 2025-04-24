import { Router } from "express";
import pingRouter from "./ping.routes";

const v1Router = Router();

v1Router.use("/ping", pingRouter);

export default v1Router;
