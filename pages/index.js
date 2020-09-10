import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Public Storybook with Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Public Storybook with Next.js</h1>

        <p className={styles.description}>
          This Next.js project hosts its Storybook publicly under{' '}
          <a href="/storybook/index.html">/storybook/index.html</a>
        </p>
      </main>
    </div>
  )
}
