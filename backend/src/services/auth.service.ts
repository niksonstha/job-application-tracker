import { createUser, findUserByEmail } from "../repositories/user.repository";

import { hashPassword } from "../utils/password";
import { AppError } from "../utils/app-error";

export async function registerUser(email: string, password: string) {
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new AppError("User with this email already exists", 409);
  }

  const passwordHash = await hashPassword(password);

  const user = await createUser(email, passwordHash);

  return {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
  };
}
