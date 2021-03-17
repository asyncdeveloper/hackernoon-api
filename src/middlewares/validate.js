import { validationResult } from 'express-validator';
import { BadRequest } from '../utils/errors';

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty())
        return next();

    throw new BadRequest('Validation Failed', errors.array());
};
