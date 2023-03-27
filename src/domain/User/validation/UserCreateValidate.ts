import { documentValidate } from '@/domain/Utils'
import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import { messages } from 'joi-translation-pt-br'

export async function UserCreateValidate(req: Request, res: Response, next: NextFunction): Promise<void> {

  const schema = Joi.object().keys({
    name: Joi.string().required(),
    document: Joi.string().custom(documentValidate).max(11).required(),
    login: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
  })

  const data = req.body

  const result = schema.validate(data, { messages })

  if (result.error) {
    res.status(422).json({
      status: 'error',
      message: result.error.message,
    })
  }
  else {
    next()
  }
}
