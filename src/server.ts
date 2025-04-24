import express from "express";
import { ServerConfig } from "./config";
import apiRouter from "./routes";
import logger from "./config/logger.config";
import {
  appErrorHandler,
  genericErrorHandler,
} from "./middlewares/error.middleware";
import { attachCorrelationIdMiddleware } from "./middlewares/correlationId.middleware";

const app = express();

app.use(express.json());

// Middleware to attach correlation ID to the request
app.use(attachCorrelationIdMiddleware);
app.use("/api", apiRouter);

app.use(appErrorHandler);
app.use(genericErrorHandler);

app.listen(ServerConfig.PORT, () => {
  logger.info(`Server is running on port : ${ServerConfig.PORT}`);
});
