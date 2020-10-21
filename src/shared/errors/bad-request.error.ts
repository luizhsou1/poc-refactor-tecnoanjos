export class BadRequestError extends Error {
  httpStatusCode: number;
  param: string;
  constructor(message: string, param: string) {
    super(message);
    this.name = 'BadRequestError';
    this.httpStatusCode = 400;
    this.param = param;
  }
}
