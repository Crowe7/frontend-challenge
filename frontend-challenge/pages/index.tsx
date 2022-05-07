import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { LoremBoxes } from '../components/LoremBoxes'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { ContactItems, HomeItems } from '../types'

const Home: NextPage<{home: HomeItems[]}> = ({ home }) => {
  return (
    <div>
      <Navbar/>
      <LoremBoxes Boxes={home} />
    </div>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const homeFetch: HomeItems[] = await fetch('http://localhost:8080/lorem/Home')
    .then(res => res.json());

  const contactFetch: ContactItems[]  = await fetch('http://localhost:8080/lorem/Contact')
    .then(res => res.json());

    return {
      props: {
        home: homeFetch,
        contact: contactFetch,
      },
    }
};
export default Home
