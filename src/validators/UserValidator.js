import { body } from 'express-validator';

export const userLoginRules = () => {
    return [
        body('email').trim().notEmpty().isEmail().withMessage('Email is required'),
        body('password').trim().notEmpty().isLength({ min: 5, max: 255 }).withMessage('Password is required'),
    ]
};
