export class ConflictError extends Error {
  httpStatusCode: number;
  constructor(message: string) {
    super(message);
    this.name = 'ConflictError';
    this.httpStatusCode = 409;
  }
}
