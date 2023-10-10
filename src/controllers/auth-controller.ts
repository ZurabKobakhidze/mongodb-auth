import { Request, Response } from "express";
import User from "models/user";

export const creteUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      password,
    });

    newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(401).json(error);
  }
};
