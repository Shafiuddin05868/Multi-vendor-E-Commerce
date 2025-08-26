import jwt from "jsonwebtoken";
import { Role } from "../types/userTypes";

export const createToken = (data: { id: string; role: keyof Role }) => {
  return jwt.sign(data, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
};
