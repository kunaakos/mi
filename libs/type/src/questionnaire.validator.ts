// @ts-nocheck
// eslint-disable
// This file is generated by create-validator-ts
import Ajv from 'ajv'
import * as apiTypes from './questionnaire'

export const SCHEMA = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    definitions: {
        Questionnaire: {
            type: 'object',
            properties: {
                type: {
                    type: 'string',
                    const: 'Questionnaire',
                },
                id: {
                    $ref: '#/definitions/Id',
                },
                questions: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Question',
                    },
                },
            },
            required: ['type', 'id', 'questions'],
            additionalProperties: false,
        },
        Id: {
            type: 'string',
        },
        Question: {
            anyOf: [
                {
                    $ref: '#/definitions/SlidingScaleQuestion',
                },
                {
                    $ref: '#/definitions/TestQuestion',
                },
            ],
        },
        SlidingScaleQuestion: {
            type: 'object',
            additionalProperties: false,
            properties: {
                extremes: {
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                    minItems: 2,
                    maxItems: 2,
                },
                type: {
                    type: 'string',
                    const: 'SlidingScaleQuestion',
                },
                id: {
                    $ref: '#/definitions/Id',
                },
                prompt: {
                    type: 'string',
                },
            },
            required: ['extremes', 'id', 'prompt', 'type'],
        },
        'GenericQuestion<"SlidingScaleQuestion">': {
            type: 'object',
            properties: {
                type: {
                    type: 'string',
                    const: 'SlidingScaleQuestion',
                },
                id: {
                    $ref: '#/definitions/Id',
                },
                prompt: {
                    type: 'string',
                },
            },
            required: ['type', 'id', 'prompt'],
            additionalProperties: false,
        },
        TestQuestion: {
            $ref: '#/definitions/GenericQuestion<"TestQuestion">',
        },
        'GenericQuestion<"TestQuestion">': {
            type: 'object',
            properties: {
                type: {
                    type: 'string',
                    const: 'TestQuestion',
                },
                id: {
                    $ref: '#/definitions/Id',
                },
                prompt: {
                    type: 'string',
                },
            },
            required: ['type', 'id', 'prompt'],
            additionalProperties: false,
        },
        QuestionnaireResponse: {
            type: 'object',
            properties: {
                type: {
                    type: 'string',
                    const: 'QuestionnaireResponse',
                },
                userId: {
                    $ref: '#/definitions/Id',
                },
                questionnaireId: {
                    $ref: '#/definitions/Id',
                },
                responses: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/QuestionResponse',
                    },
                },
            },
            required: ['type', 'userId', 'questionnaireId', 'responses'],
            additionalProperties: false,
        },
        QuestionResponse: {
            anyOf: [
                {
                    $ref: '#/definitions/SlidingScaleQuestionResponse',
                },
                {
                    $ref: '#/definitions/TestQuestionResponse',
                },
            ],
        },
        SlidingScaleQuestionResponse: {
            $ref: '#/definitions/GenericQuestionResponse<"SlidingScaleQuestionResponse",number>',
        },
        'GenericQuestionResponse<"SlidingScaleQuestionResponse",number>': {
            type: 'object',
            properties: {
                type: {
                    type: 'string',
                    const: 'SlidingScaleQuestionResponse',
                },
                userId: {
                    $ref: '#/definitions/Id',
                },
                questionnaireId: {
                    $ref: '#/definitions/Id',
                },
                questionId: {
                    $ref: '#/definitions/Id',
                },
                value: {
                    type: 'number',
                },
            },
            required: ['type', 'userId', 'questionnaireId', 'questionId', 'value'],
            additionalProperties: false,
        },
        TestQuestionResponse: {
            $ref: '#/definitions/GenericQuestionResponse<"TestQuestionResponse",string>',
        },
        'GenericQuestionResponse<"TestQuestionResponse",string>': {
            type: 'object',
            properties: {
                type: {
                    type: 'string',
                    const: 'TestQuestionResponse',
                },
                userId: {
                    $ref: '#/definitions/Id',
                },
                questionnaireId: {
                    $ref: '#/definitions/Id',
                },
                questionId: {
                    $ref: '#/definitions/Id',
                },
                value: {
                    type: 'string',
                },
            },
            required: ['type', 'userId', 'questionnaireId', 'questionId', 'value'],
            additionalProperties: false,
        },
    },
}
const ajv = new Ajv({ removeAdditional: true }).addSchema(SCHEMA, 'SCHEMA')
export function validateQuestionnaire(payload: unknown): apiTypes.Questionnaire {
    /** Schema is defined in {@link SCHEMA.definitions.Questionnaire } **/
    const validator = ajv.getSchema('SCHEMA#/definitions/Questionnaire')
    const valid = validator(payload)
    if (!valid) {
        const error = new Error(
            'Invalid Questionnaire: ' + ajv.errorsText(validator.errors, { dataVar: 'Questionnaire' }),
        )
        error.name = 'ValidationError'
        throw error
    }
    return payload
}

export function isQuestionnaire(payload: unknown): payload is apiTypes.Questionnaire {
    try {
        validateQuestionnaire(payload)
        return true
    } catch (error) {
        return false
    }
}

export function validateQuestion(payload: unknown): apiTypes.Question {
    /** Schema is defined in {@link SCHEMA.definitions.Question } **/
    const validator = ajv.getSchema('SCHEMA#/definitions/Question')
    const valid = validator(payload)
    if (!valid) {
        const error = new Error('Invalid Question: ' + ajv.errorsText(validator.errors, { dataVar: 'Question' }))
        error.name = 'ValidationError'
        throw error
    }
    return payload
}

export function isQuestion(payload: unknown): payload is apiTypes.Question {
    try {
        validateQuestion(payload)
        return true
    } catch (error) {
        return false
    }
}

export function validateSlidingScaleQuestion(payload: unknown): apiTypes.SlidingScaleQuestion {
    /** Schema is defined in {@link SCHEMA.definitions.SlidingScaleQuestion } **/
    const validator = ajv.getSchema('SCHEMA#/definitions/SlidingScaleQuestion')
    const valid = validator(payload)
    if (!valid) {
        const error = new Error(
            'Invalid SlidingScaleQuestion: ' + ajv.errorsText(validator.errors, { dataVar: 'SlidingScaleQuestion' }),
        )
        error.name = 'ValidationError'
        throw error
    }
    return payload
}

export function isSlidingScaleQuestion(payload: unknown): payload is apiTypes.SlidingScaleQuestion {
    try {
        validateSlidingScaleQuestion(payload)
        return true
    } catch (error) {
        return false
    }
}

export function validateTestQuestion(payload: unknown): apiTypes.TestQuestion {
    /** Schema is defined in {@link SCHEMA.definitions.TestQuestion } **/
    const validator = ajv.getSchema('SCHEMA#/definitions/TestQuestion')
    const valid = validator(payload)
    if (!valid) {
        const error = new Error(
            'Invalid TestQuestion: ' + ajv.errorsText(validator.errors, { dataVar: 'TestQuestion' }),
        )
        error.name = 'ValidationError'
        throw error
    }
    return payload
}

export function isTestQuestion(payload: unknown): payload is apiTypes.TestQuestion {
    try {
        validateTestQuestion(payload)
        return true
    } catch (error) {
        return false
    }
}

export function validateQuestionnaireResponse(payload: unknown): apiTypes.QuestionnaireResponse {
    /** Schema is defined in {@link SCHEMA.definitions.QuestionnaireResponse } **/
    const validator = ajv.getSchema('SCHEMA#/definitions/QuestionnaireResponse')
    const valid = validator(payload)
    if (!valid) {
        const error = new Error(
            'Invalid QuestionnaireResponse: ' + ajv.errorsText(validator.errors, { dataVar: 'QuestionnaireResponse' }),
        )
        error.name = 'ValidationError'
        throw error
    }
    return payload
}

export function isQuestionnaireResponse(payload: unknown): payload is apiTypes.QuestionnaireResponse {
    try {
        validateQuestionnaireResponse(payload)
        return true
    } catch (error) {
        return false
    }
}

export function validateQuestionResponse(payload: unknown): apiTypes.QuestionResponse {
    /** Schema is defined in {@link SCHEMA.definitions.QuestionResponse } **/
    const validator = ajv.getSchema('SCHEMA#/definitions/QuestionResponse')
    const valid = validator(payload)
    if (!valid) {
        const error = new Error(
            'Invalid QuestionResponse: ' + ajv.errorsText(validator.errors, { dataVar: 'QuestionResponse' }),
        )
        error.name = 'ValidationError'
        throw error
    }
    return payload
}

export function isQuestionResponse(payload: unknown): payload is apiTypes.QuestionResponse {
    try {
        validateQuestionResponse(payload)
        return true
    } catch (error) {
        return false
    }
}

export function validateSlidingScaleQuestionResponse(payload: unknown): apiTypes.SlidingScaleQuestionResponse {
    /** Schema is defined in {@link SCHEMA.definitions.SlidingScaleQuestionResponse } **/
    const validator = ajv.getSchema('SCHEMA#/definitions/SlidingScaleQuestionResponse')
    const valid = validator(payload)
    if (!valid) {
        const error = new Error(
            'Invalid SlidingScaleQuestionResponse: ' +
                ajv.errorsText(validator.errors, { dataVar: 'SlidingScaleQuestionResponse' }),
        )
        error.name = 'ValidationError'
        throw error
    }
    return payload
}

export function isSlidingScaleQuestionResponse(payload: unknown): payload is apiTypes.SlidingScaleQuestionResponse {
    try {
        validateSlidingScaleQuestionResponse(payload)
        return true
    } catch (error) {
        return false
    }
}

export function validateTestQuestionResponse(payload: unknown): apiTypes.TestQuestionResponse {
    /** Schema is defined in {@link SCHEMA.definitions.TestQuestionResponse } **/
    const validator = ajv.getSchema('SCHEMA#/definitions/TestQuestionResponse')
    const valid = validator(payload)
    if (!valid) {
        const error = new Error(
            'Invalid TestQuestionResponse: ' + ajv.errorsText(validator.errors, { dataVar: 'TestQuestionResponse' }),
        )
        error.name = 'ValidationError'
        throw error
    }
    return payload
}

export function isTestQuestionResponse(payload: unknown): payload is apiTypes.TestQuestionResponse {
    try {
        validateTestQuestionResponse(payload)
        return true
    } catch (error) {
        return false
    }
}