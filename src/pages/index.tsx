import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import avatarImg from '../../public/images/avatar.svg'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from './Home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home - ig.news</title>
      </Head>

      <main className={styles.mainWrapper}>
        <section className={styles.sectionWrapper}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <strong>React</strong> world</h1>
          <p className={styles.priceInfo}>Get acess to all the publications <br />
            <span>for {product.amount} monthly</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src={avatarImg} alt="Girl coding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1JtWn8CXe79jUASNzVTCAATr')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    }
  }
}