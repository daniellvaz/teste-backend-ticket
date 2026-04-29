import { ServerError } from "./ServerError";

export class NotFound extends ServerError {
  public statusCode = 404;

  constructor(message: string) {
    super(message);

    this.body = JSON.stringify({
      error: "Not Found",
      message,
    });
  }
}
