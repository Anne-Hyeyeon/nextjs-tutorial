import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import ItemList from '../src/component/ItemList'
import { Header, Divider } from 'semantic-ui-react'

export default function Home() {
  const [list, setList] = useState([])
  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data)
      setList(res.data)
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <Head>
        <title>화장품 사이트</title>
      </Head>
      <Header as='h3' style={{ paddingTop:40 }}>베스트 상품</Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as='h3' style={{ paddingTop:40 }}>신상품</Header>
      <Divider />
      <ItemList list={list.slice(9, 18)} />
    </div>
  )
}
