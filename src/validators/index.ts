import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
import { StatusCodes } from "http-status-codes";

export const validateRequestBody = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Invalid req body",
        error: error,
      });
    }
  };
};

export const validateQueryParams = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.query);
      next();
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: "Invalid query parameters",
        error: error,
      });
    }
  };
};
