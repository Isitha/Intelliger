import { NextFunction, Request, Response } from "express";

import AppError from "../utils/appError";
import utils from "../utils";

const sendErrorDev = (err: AppError, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};

const sendErrorProd = (err: AppError, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // Log error
    console.error("ERROR 💥", err);

    // Send generic message
    res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
  }
};

const globalErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  switch (utils.getEnvVar("NODE_ENV")) {
    case "development":
      sendErrorDev(err, res);
      break;
    case "production":
      sendErrorProd(err, res);
      break;
    default:
      console.error("Environment variable NODE_ENV is not set correctly");
      res.status(500).json({
        status: "error",
        message: "Something went very wrong!",
      });
  }
};

export default globalErrorHandler;
