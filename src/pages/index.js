import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "./Posts"

const IndexPage = () => (
  <>
  <SEO title="借りっぱなし.com" description="借りっぱなし債務者のための情報サイト、最新のキャッシング方法や現金化方法などあらゆる金策情報を配信しています。"/>
  <Layout>
  <Posts/>

  </Layout>
  </>
)

export default IndexPage
