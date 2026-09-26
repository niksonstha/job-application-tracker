import express from "express";
import apiRouter from "./routes/index.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { AppError } from "./utils/app-error.js";
import { requestLogger } from "./middleware/request-logger.middleware.js";

const app = express();

app.use(requestLogger);

app.use(express.json());

app.use("/api/v1", apiRouter);

app.use((_req, _res, next) => {
  next(new AppError("Route not found", 404));
});

app.use(errorMiddleware);

export default app;
