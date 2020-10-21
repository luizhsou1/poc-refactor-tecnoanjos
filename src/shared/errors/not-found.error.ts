export class NotFoundError extends Error {
  httpStatusCode: number;
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
    this.httpStatusCode = 404;
  }
}
