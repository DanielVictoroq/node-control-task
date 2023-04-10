import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import { messages } from 'joi-translation-pt-br'

export async function CreditCreateValidate(req: Request, res: Response, next: NextFunction): Promise<void> {

  const schema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
    dtCredit: Joi.date().required(),
    typeCreditsId: Joi.number().required(),
    qtdRepeat: Joi.number(),
    userId: Joi.number().required(),
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
