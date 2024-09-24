import Joi from "joi";

const carValidator = Joi.object({
    reviewerName: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.base': 'Name should be a string',
            'string.empty': 'Name cannot be empty',
            'string.min': 'Name should have at least 2 characters',
            'string.max': 'Name should have no more than 50 characters',
            'any.required': 'Name is required',
        }),

    rating: Joi.number()
        .integer()
        .min(1)
        .max(5)
        .required()
        .messages({
            'number.base': 'Rating should be a number',
            'number.min': 'Rating must be at least 1',
            'number.max': 'Rating must not exceed 5',
            'any.required': 'Rating is required',
        }),

    comment: Joi.string()
        .min(5)
        .max(500)
        .required()
        .messages({
            'string.base': 'Comment should be a string',
            'string.empty': 'Comment cannot be empty',
            'string.min': 'Comment should have at least 5 characters',
            'string.max': 'Comment should have no more than 500 characters',
            'any.required': 'Comment is required',
        }),
})

export {
    carValidator
}