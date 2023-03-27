import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

export function LoginValidate(req: Request, res: Response, next: NextFunction): void {

  const schema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().required(),
  })

  const data = req.body

  const result = schema.validate(data)

  if (result.error) {
    res.status(422).json({
      status: 'error',
      message: result.error.message,
      data: data,
    })
  }
  else {
    next()
  }
}