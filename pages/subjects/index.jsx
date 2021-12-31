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
        <div>
          <h2>キーワード検索</h2>
          <div>
            <div>icon</div>
            <input></input>
            <div>学部</div>
          </div>
        </div>
      </div>
      <div>
        <h2>コマ検索</h2>
        <div>
          <table>
            <tbody>
              <tr><th>月</th></tr>
              <tr><td>1</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div>
          <h2>もっとみる▼</h2>
        </div>
        <div>
          <div>
            <h2>授業形態</h2>
            <div>
              <input type="checkbox" /><label htmlFor=""></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}