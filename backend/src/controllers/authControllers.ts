import { Request, Response } from "express";
import bcrypt from "bcrypt";
import adminModel from "../models/adminModel";
import { responseReturn } from "../utiles/response";
import { createToken } from "../utiles/createToken";
import { Role } from "../types/userTypes";

class authControllers {
  admin_login = async (req: Request, res: Response) => {
    // console.log(req.body);
    const { email, password } = req.body;
    try {
      const adminData = await adminModel.findOne({ email: email });
      if (adminData) {
        const isMatch = await bcrypt.compare(password, adminData.password);
        if (isMatch) {
          res.cookie(
            "vendor_verse_access",
            createToken({
              id: adminData._id.toString(),
              role: "admin" as keyof Role,
            }),
            {
              expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), //30d
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
            }
          );
          responseReturn(res, 200, {
            message: "Admin login success",
            data: adminData,
          });
        } else {
          responseReturn(res, 401, { message: "Invalid password" });
        }
      } else {
        responseReturn(res, 404, { message: "Admin not found" });
      }
    } catch (err) {
      responseReturn(res, 500, { message: (err as Error).message });
    }
  };
}

export default new authControllers();
