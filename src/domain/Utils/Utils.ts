import { CustomHelpers, ErrorReport } from 'joi'
import { filter, orderValue} from '../Tasks'

export const documentValidate = <T extends string>(document: T, helpers: CustomHelpers): T | ErrorReport => {
  let sum = 0
  let rest = 0
  if (document == '00000000000') {
    return helpers.error('any.invalid')
  }
  for (let i = 1; i <= 9; i++) sum = sum + parseInt(document.substring(i - 1, i)) * (11 - i)
  rest = (sum * 10) % 11

  if ((rest === 10) || (rest === 11)) rest = 0
  if (rest != parseInt(document.substring(9, 10))) return helpers.error('any.invalid')

  sum = 0
  for (let i = 1; i <= 10; i++) sum = sum + parseInt(document.substring(i - 1, i)) * (12 - i)
  rest = (sum * 10) % 11

  if ((rest === 10) || (rest === 11)) rest = 0
  if (rest != parseInt(document.substring(10, 11))) return helpers.error('any.invalid')

  return document
}

export type findOptions = {
  where?: filter
  order?: orderValue
  take?: number
}
