import Stripe from 'stripe'
import { version } from '../../package.json'

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY,  // chave do projeto stripe
  {
    apiVersion:'2020-08-27',
    appInfo: {
      name: 'Ignews',
      version
    },
  }
)