export class HttpCreate<T> {
  constructor(
    public data: T,
    public statusCode: number = 201,
  ) {}

  public send() {
    return {
      statusCode: this.statusCode,
      body: JSON.stringify({
        data: this.data,
      }),
    };
  }
}
