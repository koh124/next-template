import type { GetStaticPaths, GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"

type Props = {
  data: string
};

export const getStaticPaths: GetStaticPaths = async () => {
  // both "paths" is acceptable
  // const paths: string[] = [''];
  // try out access to 'posts/1'
  const paths: { params: ParsedUrlQuery }[] = [
    // 配列要素一つ一つが動的生成されたページ固有のパラメータ
    {
      params: {
        hoge : '1' // URLパラメータ
      }
    },
  ]
  return {
    paths,
    fallback: false // pathsに指定しないページに404を返す
  }
}

// getStaticPathsを使用した場合、必ずgetStaticPropsも使用する必要がある
// URLパラメータを受け取ることができる
export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      data: params?.hoge
    }
  }
}

export default function post({data} : Props) {
  return (
    <>
      <p>動的ルーティング</p>
      <p>パラメータは{ data }</p>
    </>
  )
}
