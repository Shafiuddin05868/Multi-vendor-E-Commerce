import { Request } from "express";

export type Role = {
  admin: "admin",
  vendor: "vendor",
  customer: "customer",
}

export interface Token {
  id: string;
  role: keyof Role;
}

export interface AuthenticatedRequest extends Request {
  id?: string;
  role?: string;
}