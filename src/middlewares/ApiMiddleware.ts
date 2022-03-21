
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const ApiMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers.authorization

    if (!token) {
      return res.status(401).json({ message: 'Token inexistente' })
    }

    if (token.toLowerCase().startsWith('bearer')) {
      token = token.slice('bearer'.length).trim()
    }

    jwt.verify(token, `${process.env.JWT_SECRET}`)

    next()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === 'TokenExpiredError') {
      res.status(401).json({ message: 'Token expirado' })
      return
    }

    res.status(500).json({ message: 'Falha ao autenticar usuário' })
  }
}