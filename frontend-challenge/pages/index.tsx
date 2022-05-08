import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { LoremBoxes } from '../components/LoremBoxes'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { ContactItems, HomeItems } from '../types'


import { arrayOne, arrayTwo, noDuplicates,  } from '../data/ArrayPuzzle'
import { Box, Title } from '@mantine/core'

const Home: NextPage<{home: HomeItems[]}> = ({ home }) => {

  return (
    <div>
      <Navbar/>
      <LoremBoxes Boxes={home} />

      <Box sx={{
        paddingLeft: 90,
        paddingRight: 90,
        paddingTop: 50

      }}> 
        <Title sx={{fontSize: "3.1rem"}} order={1}><span style={{ borderBottom: "4px solid #DEBF79" }}>Heading</span> One</Title>
      </Box>
    </div>
  )
}
// in state hold the 2 arrays in the readme and pass both of them into a function placed inside of the button we have to click
// when button is clicked call the function in data and then use the notification provider to display that the operation is done?
// gold list dots and light text
// same padding as everything else of course.

// TODO #DEBF79
// RESPONSIVE LOREM
// WRITE HEADING ONE AND DUPLICATES TEXT
// RESPONSIVE HEADING ONE AND DUPLICATES TEXT
// FUNCTION TO COMBINE BOTH ARRYS INTO A SET THEN DISPLAY THEM
// NOTIFICATIONS PROVIDER SUPPORT FOR COMBINE FUNCTION
// DISPLAY ARRAY RESULTS
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
