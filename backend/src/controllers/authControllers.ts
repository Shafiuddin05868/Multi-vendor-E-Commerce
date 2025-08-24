import { Request, Response } from "express";

class authControllers {
  admin_login = async (req: Request, res: Response) => {
    console.log(req.body);
    res.send(req.body)
  };
}

export default new authControllers();
