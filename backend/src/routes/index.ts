import { Router } from "express";
import { sendSuccess } from "../utils/api-response";
import authRoutes from "./auth.routes";

const router = Router();

router.get("/health", (_req, res) => {
  return sendSuccess(res, {
    message: "API is healthy",
  });
});

router.use("/auth", authRoutes);

export default router;
