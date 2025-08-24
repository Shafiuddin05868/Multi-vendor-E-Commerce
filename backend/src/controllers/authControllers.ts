import { Request, Response } from "express";
import adminModel from "../models/adminModel";

class authControllers {
  admin_login = async (req: Request, res: Response) => {
    // console.log(req.body);
    const adminData = await adminModel.findOne({email: req.body.email})
    if (!adminData) {
      return res.json({
        message: "Admin not found",
      })
    }
    res.json({
      message: "Admin login",
      data: adminData,
    })
  };
}

export default new authControllers();
