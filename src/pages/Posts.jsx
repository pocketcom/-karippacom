import React from "react"
import { Link } from "gatsby"
import ContentArea from "../components/ContentArea"

const Posts = () => (
  <>
    <Link to="/Post001/">
    <ContentArea
    title="【ブラックでも借りたい人へ】無審査で即日５万円をキャッシングする方法【携帯決済現金化】"
    filename="Post001.jpg" alt ="携帯決済現金化"
    date=
    "2020/5/26"
    link="../pages/post001/"
    />
    </Link>
    <Link to="/Post005/">
    <ContentArea
    title="【実体験】任意整理して今すぐ催促を止めましょう。実体験を元に任意整理について説明します。"
    filename="sugi1.jpg" alt ="ブラックの人はいますぐ催促の電話を止めよう"
    date=
    "2020/6/5"
    link="../pages/post005/"
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
    <Link to="/Post004/">
    <ContentArea
    title="【最新後払い】Paidy翌月払いを使ってAmazonでの買い物を後払いしよう"
    filename="pay1.jpg" alt ="paidyで翌月払いする方法"
    date=
    "2020/6/1"
    link="../pages/post004/"
    />
    </Link>
  </>
)

export default Posts