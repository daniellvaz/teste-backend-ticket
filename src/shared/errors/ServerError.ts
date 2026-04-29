export class ServerError extends Error {
  public statusCode = 500;
  public body: string;

  constructor(message: string) {
    super(message);

    this.name = "ServerError";
    this.body = JSON.stringify({
      error: "Server Error",
      message,
    });
  }
}
