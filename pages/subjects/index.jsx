//@ts-check
import Head from "next/head"
import Header from "../../components/Header"

export default function Subjects() {
  return (
    <div>
      <Head>
        <title>Waseda Noodle</title>
        <meta name="description" content="Waseda Noodleの検索ページ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        こんにちは
      </div>
    </div>
  )
}