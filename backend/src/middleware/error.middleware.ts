import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

import { AppError } from "../utils/app-error.js";

export const errorMiddleware: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next,
) => {
  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      error: {
        message: "Validation failed",
        issues: error.issues,
      },
    });
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      success: false,
      error: {
        message: error.message,
      },
    });
  }

  console.error(error);

  return res.status(500).json({
    success: false,
    error: {
      message: "Internal server error",
    },
  });
};
