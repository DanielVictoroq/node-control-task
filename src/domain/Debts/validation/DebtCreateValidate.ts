import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import { messages } from 'joi-translation-pt-br'

export async function DebtsCreateValidate(req: Request, res: Response, next: NextFunction): Promise<void> {

  const schema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
    dt_debt: Joi.date().required(),
    type_debts_id: Joi.number().required(),
    qtd_plots: Joi.number(),
    user_id: Joi.number().required(),
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
