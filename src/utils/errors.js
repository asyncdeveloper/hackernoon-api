import HttpStatusCode from 'http-status-codes';

export class GeneralError extends Error {

    constructor(message, errors = null) {
        super();

        this.message = message;
        this.errors = errors;
    }

    getCode() {
        if (this instanceof BadRequest) {
            return HttpStatusCode.BAD_REQUEST;
        }

        if (this instanceof NotFound) {
            return HttpStatusCode.NOT_FOUND;
        }

        if (this instanceof Forbidden) {
            return HttpStatusCode.FORBIDDEN;
        }

        if (this instanceof UnAuthorized) {
            return HttpStatusCode.UNAUTHORIZED;
        }

        return HttpStatusCode.INTERNAL_SERVER_ERROR;
    }
}

export class BadRequest extends GeneralError { }

export class NotFound extends GeneralError { }

export class Forbidden extends GeneralError { }

export class UnAuthorized extends GeneralError { }
