import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Token, AuthenticatedRequest } from "../types/userTypes";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { vendor_verse_access } = req.cookies;
  
  if (!vendor_verse_access) {
    res.status(401).json({ message: "Error: You are not authorized" });
    return;
  }
  
  try {
    const decodeToken = jwt.verify(
      vendor_verse_access,
      process.env.JWT_SECRET as string
    ) as Token;
    
    (req as AuthenticatedRequest).id = decodeToken.id;
    (req as AuthenticatedRequest).role = decodeToken.role;
    next();
  } catch (_) {
    res.status(401).json({ message: "Error: You are not authorized" });
  }
};
