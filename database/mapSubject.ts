export interface Subject {
  id?: string,
  name: string,
  url_code: string,
  undergraduate: "政経" | "法学" | "教育" | "商学" | "社学" | "人科" | "スポーツ" | "国際教養" | "文構" | "文" | "人通" | "基幹" | "創造" | "先進" | "政研" | "経研" | "法研" | "文研" | "商研" | "教研" | "人研" | "社学研" | "アジア研" | "国情研" | "日研" | "情シス研" | "法務研" | "会計研" | "スポーツ研" | "基幹研" | "創造研" | "先進研" | "環エネ研" | "国際コミ研" | "経管研" | "芸術" | "日本語" | "留学" | "グローバル",
  semester: string,
  period: [string],
  professor: [string],
  method: "対面" | "ハイブリッド（対面／オンライン併用）" | "フルオンデマンド（曜日時限なし）" | "オンデマンド（曜日時限あり）" | "リアルタイム配信",
  description: string,
  open: boolean,
  grade: string,
  tag: {
    tags: string[]
    score: {
      sum: number,
      tags: number[]
    }
  },
  keywords: Array<String>
}

/**
 * databaseから取得したデータを成型して返す
 * @param data databaseから取得したデータ
 * @returns Subject 成型したデータ
 */
const mapSubject = (data: any): Subject => {
  const tagSumScore = data["ks"]["s"]
  const tagScore: number[] = data["ks"]["d"]
  const tagLength = tagScore.length
  const tags: string[] = data["kw"].splice(0, tagLength)
  console.log(data)
  let subject: Subject = {
    id: data["_id"] || "id",
    name: data["n"],//科目名
    url_code: data["c"],
    undergraduate: data["u"],
    semester: data["s"],
    period: data["k"],//配列
    professor: data["p"],//配列
    method: data["m"],
    description: data["d"],
    open: data["o"],//true or false
    grade: data["g"],
    tag: {
      tags: tags,//配列["tagname1", "tagname2"…]//要素数は1~5コ
      score: {
        tags: tagScore,//上のtagsに対応する数の要素数。tagの強さ
        sum: tagSumScore,//tagの強さ合計(tagsの合計値ではない)
      }
    },
    keywords: data["kw"]///とりあえず使うことはない
  }
  return subject
}

export default mapSubject