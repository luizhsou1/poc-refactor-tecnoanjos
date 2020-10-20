export class DomainError extends Error {
  constructor(name: string, message: string) {
    super(message);
    this.name = name;
  }
}

export class NotFoundError extends DomainError {
  constructor(name: string, message: string) {
    super(name, message);
  }
}

export class UserInUseError extends DomainError {
  constructor() {
    super('UserInUseError', 'Usuário já cadastrado anteriormente!');
  }
}

export class ValidationError extends Error {
  param: string;
  constructor(message: string, param: string) {
    super(message);
    this.name = 'ValidationError';
    this.param = param;
  }
}

export class JsonWebTokenError extends Error {
  constructor(message) {
    super(message);
    this.name = 'JsonWebTokenError';
  }
}
