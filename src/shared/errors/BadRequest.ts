import { ServerError } from "./ServerError";

export class BadRequest extends ServerError {
  public statusCode = 400;

  constructor(message: string) {
    super(message);

    this.body = message;
    this.body = JSON.stringify({
      error: "Bad Request",
      message,
    });
  }
}
