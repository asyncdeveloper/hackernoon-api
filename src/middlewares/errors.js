import HttpStatusCode from 'http-status-codes';
import { GeneralError } from '../utils/errors';
import { firebaseAuth } from '../config/config';

export default (err, req, res, next) => {
    if (err instanceof GeneralError) {
        return res.status(err.getCode()).json({
            message: err.message,
            errors: err.errors
        });
    }

    if (err instanceof firebaseAuth.Error) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({
            message: err.message
        });
    }

    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong. It's not your fault and we apologize for this",
        errors: null
    });
}
