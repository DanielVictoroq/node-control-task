import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import { messages } from 'joi-translation-pt-br'

export async function TaskUpdateValidate(req: Request, res: Response, next: NextFunction): Promise<void> {

  const schema = Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    dt_task: Joi.date(),
    type_task_id: Joi.number(),
    credit_id: Joi.number(),
    debt_id: Joi.number(),
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
