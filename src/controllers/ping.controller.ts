import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export async function pingHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(StatusCodes.OK).json({ message: "Pong!", success: true });
}
