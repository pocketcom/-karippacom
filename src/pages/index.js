import React from "react"
import { Link } from "gatsby"
import ContentArea from "../components/ContentArea"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
  <SEO title="借りっぱなし.com" description="借りっぱなし債務者のための情報サイト、最新のキャッシング方法や現金化方法などあらゆる金策情報を配信しています。"/>
  <Layout>
    <Link to="/Post001/">
    <ContentArea
    title="【2020年最新】無審査で即日５万円をキャッシングする方法【携帯決済現金化】"
    filename="Post001.jpg" alt ="携帯決済現金化"
    date=
    "2020/5/26"
    link="../pages/post001/"
    />
    </Link>
    <Link to="/Post002/">
    <ContentArea
    title="【最新後払い】メルペイスマート払いを使ってコンビニ支払いを後払いしよう"
    filename="melpay.jpg" alt ="メルペイ後払い"
    date=
    "2020/5/26"
    link="../pages/post002/"
    />
    </Link>
    <Link to="/Post003/">
    <ContentArea
    title="【最新現金化】バンドルカードを作って、クレジット枠を現金化しよう"
    filename="van.jpg" alt ="バンドルカード現金化"
    date=
    "2020/5/27"
    link="../pages/post003/"
    />
    </Link>

  </Layout>
  </>
)

export default IndexPage
