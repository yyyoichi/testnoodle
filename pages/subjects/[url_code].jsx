//@ts-check
import Head from 'next/head'
import styles from "../../styles/Home.module.css"
import show from "../../styles/show.module.css"
import data from "../../database/data"
import mapSubject from "../../database/mapSubject"
import Header from "../../components/Header.jsx"
import Headercss from "../../styles/Header.module.css"
import TagGraph from "../../components/TagGraph.jsx"

export default function Subject(props) {
  const subject = mapSubject(props["data"]);//中身はdatabase/mapSubject.ts
  const syllabusUrl = "https://www.wsl.waseda.jp/syllabus/JAA104.php?pKey=" + subject["url_code"];

  return (
    <div className={styles.container}>
      <Head>
        <title>{subject["name"]}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={show['containers']}>
          <div className={show['title-container']}>
            <h1>{subject["name"]}</h1>
            <h3>{subject["professor"]}</h3>
            <h3>{subject["semester"]}</h3>
            <h3>{subject["period"]}</h3>
          </div>
          <div className={show['analysis-container']}>
            <div className={show['learning']}>
              <p className={show['learning-title']}>何が学べる？</p>
              <div className='learning-contents'>
                <TagGraph subject={subject} />
              </div>
            </div>
          </div>
          <div className={show['analysis-container']}>
            <div className={show['lecture']}>
              <p className={show['lecture-title']}>どんな講義？</p>
              <div className='lecture-contents'></div>
            </div>
          </div>
          <div className={show['analysis-container']}>
            <div className={show['syllabus']}>
              <p className={show['syllabus-title']}>シラバス情報</p>
              <div className={show['syllabus-contents']}>
                <p>{subject["grade"]}</p>
                <a href={"https://www.wsl.waseda.jp/syllabus/JAA104.php?pKey=" + subject['url_code']} target="_blank" >{"https://www.wsl.waseda.jp/syllabus/JAA104.php?pKey=" + subject['url_code']}</a>
              </div>
              <br />
            </div>
          </div>
          <div className={show['other-classes']}>
            <div className={show['other-class']}>
              <p className={show['other-class-title']}>関連授業</p>
              <div className={show['other-class-contents']}></div>
            </div>
            <div className={show['other-class']}>
              <p className={show['other-class-title']}>関連授業</p>
              <div className={show['other-class-contents']}></div>
            </div>
            <div className={show['other-class']}>
              <p className={show['other-class-title']}>関連授業</p>
              <div className={show['other-class-contents']}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          url_code: "9S120300290120219S120300299S"
        },
      }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const url_code = await params.url_code
  return {
    props: {
      data: data[url_code]
    }
  }
}

