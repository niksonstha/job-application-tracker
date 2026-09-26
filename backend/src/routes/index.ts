import { Router } from "express";
import { sendSuccess } from "../utils/api-response";

const router = Router();

router.get("/health", (_req, res) => {
  return sendSuccess(res, {
    message: "API is healthy",
  });
});

export default router;
