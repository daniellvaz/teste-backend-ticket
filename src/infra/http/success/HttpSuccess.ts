import { Meta } from "./Meta";

export class HttpSuccess<T> {
  constructor(
    public data: T,
    public meta?: Meta,
    public statusCode: number = 200,
  ) {}

  public send() {
    return {
      statusCode: this.statusCode,
      body: JSON.stringify({
        data: this.data,
        meta: this.meta,
      }),
    };
  }
}
