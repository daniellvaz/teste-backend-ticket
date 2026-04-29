import { Handler } from "aws-lambda";
import { ZodError } from "zod";
import { BadRequest } from "../errors/BadRequest";
import { NotFound } from "../errors/NotFound";
import { ServerError } from "../errors/ServerError";

export const withMiddleware = (handler: Handler): Handler => {
  return async (event: any, context: any) => {
    try {
      const response = await handler(event, context, () => {});

      return response;
    } catch (error) {
      if (error instanceof BadRequest) {
        const err = new BadRequest(error.message);

        return {
          statusCode: err.statusCode,
          body: err.body,
        };
      }

      if (error instanceof ZodError) {
        const err = new BadRequest(JSON.parse(error.message));

        return {
          statusCode: err.statusCode,
          body: err.body,
        };
      }

      if (error instanceof NotFound) {
        const err = new NotFound(error.message);
        return {
          statusCode: err.statusCode,
          body: err.body,
        };
      }

      if (error instanceof Error) {
        const err = new ServerError(error.message);
        return {
          statusCode: err.statusCode,
          body: err.body,
        };
      }
    }
  };
};
