import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <Link href={'/isr'}>
          <a>isr動作確認ページへ</a>
        </Link>
        <Link href={'/ssg'}>
          <a>ssg動作確認ページへ</a>
        </Link>
        <Link href={'/ssr'}>
          <a>ssr動作確認ページへ</a>
        </Link>
        <Link href={'/subjects/9S120300290120219S120300299S'}>
          <a>講義詳細ページへ</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
