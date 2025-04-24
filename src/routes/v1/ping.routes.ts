import { Router } from "express";
import { pingHandler } from "../../controllers/ping.controller";

const pingRouter = Router();

pingRouter.get("/", pingHandler);

export default pingRouter;
