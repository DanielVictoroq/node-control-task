import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import { messages } from 'joi-translation-pt-br'

export async function DebtsUpdateValidate(req: Request, res: Response, next: NextFunction): Promise<void> {

  const schema = Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    value: Joi.number(),
    dt_debt: Joi.date(),
    type_debts_id: Joi.number(),
    qtd_plots: Joi.number(),
    user_id: Joi.number(),
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
