import { body } from 'express-validator';

export const storyCreateRules = () => {
    return [
        body('markup').trim().notEmpty().isLength({ min: 3 }).withMessage('Markup must be at least 3 characters'),
        body('title').trim().notEmpty().isLength({ min: 1, max: 255 }).withMessage('Title must be at least 1 character'),
        body('excerpt').optional().trim().isLength({ min: 3, max: 255 }),
        body('tags').optional().isArray(),
        body('wordCount').isInt(),
        body('published').optional().isBoolean(),
        body('tags.*').optional().isString().isLength( { max: 100 }),
        body('mainImage').trim().optional().isString(),
    ]
};
