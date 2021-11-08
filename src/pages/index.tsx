import Head from 'next/head'
import Image from 'next/image'

import avatarImg from '../../public/images/avatar.svg'
import { SubscribeButton } from '../components/SubscribeButton'

import styles from './Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - ig.news</title>
        </Head>
      
      <main className={styles.mainWrapper}>
        <section className={styles.sectionWrapper}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <strong>React</strong> world</h1>
          <p className={styles.priceInfo}>Get acess to all the publications <br/>
          <span>for $9,90 monthly</span>
          </p>
          <SubscribeButton/>
        </section>

        <Image src={avatarImg} alt="Girl coding" />
      </main>
    </>
  )
}
