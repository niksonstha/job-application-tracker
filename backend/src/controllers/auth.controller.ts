import type { NextFunction, Request, Response } from "express";

import { registerUser } from "../services/auth.service";
import { sendSuccess } from "../utils/api-response";
import { registerSchema } from "../validators/auth.schema";

export async function register(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const input = registerSchema.parse(req.body);

    const user = await registerUser(input.email, input.password);

    return sendSuccess(
      res,
      {
        message: "User registered successfully",
        user,
      },
      201,
    );
  } catch (error) {
    next(error);
  }
}
