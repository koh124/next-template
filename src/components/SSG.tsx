import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: 'here is your data'
    }
  }
}
