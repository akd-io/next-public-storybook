import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Public Storybook with Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Public Storybook with Next.js</h1>
        <p className={styles.description}>
          This Next.js project hosts its Storybook publicly at{' '}
          <a href="/storybook/index.html">/storybook/index.html</a>.
        </p>
        <p className={styles.description}>
          See how on{' '}
          <a href="https://github.com/akd-io/next-public-storybook">GitHub</a>!
        </p>
      </main>
    </div>
  )
}

export default Home
