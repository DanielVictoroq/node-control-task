import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import { messages } from 'joi-translation-pt-br'

export async function CreditUpdateValidate(req: Request, res: Response, next: NextFunction): Promise<void> {

  const schema = Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    value: Joi.number(),
    dtCredit: Joi.date(),
    typeCreditsId: Joi.number(),
    qtdRepeat: Joi.number(),
    userId: Joi.number(),
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
