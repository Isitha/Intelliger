import express, { NextFunction, Request, Response } from "express";

import AppError from "./utils/appError";
import globalErrorHandler from "./controllers/error.controller";

const app = express();

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(globalErrorHandler);

export default app;
