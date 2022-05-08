/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { LoremBoxes } from '../components/LoremBoxes'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { ContactItems, HomeItems } from '../types'


import { arrayOne, arrayTwo, noDuplicates,  } from '../data/ArrayPuzzle'
import { Box, Button, List, ListItem, Text, ThemeIcon, Title } from '@mantine/core'
import { useState } from 'react'

const Home: NextPage<{home: HomeItems[]}> = ({ home }) => {

  const [puzzleArray, setPuzzleArray] = useState<string[]>([]);


  return (
    <div>
      <Navbar/>
      <LoremBoxes Boxes={home} />

      <Box sx={{
        paddingLeft: 90,
        paddingRight: 90,
        paddingTop: 50,
        '@media (max-width: 600px)': {paddingRight: 30, paddingLeft: 30}

      }}> 
        <Title sx={{fontSize: "3.1rem"}} order={1}><span style={{ borderBottom: "4px solid #DEBF79" }}>Heading</span> One</Title>
        <Text sx={{
          marginTop: "40px"
        }}>
          Remove the duplicates in 2 Javascript arrays (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when 
          <span> <Button variant='subtle'
                    styles={(theme) => ({
                      root: {
                        color : '#DEBF79',
                        padding: 0,
                        margin: 0,
                        '&:hover': {
                          backgroundColor: 'inherit'
                        } 
                      }
                    })}
                  >this link</Button> </span>
          is clicked. if the operation has been completed already, notify the user that this has already been done.
        </Text>
      </Box>
      {puzzleArray.length !== 0 &&
        <List 
          sx={{paddingLeft: 95, marginBottom: 20, paddingTop: 10, '@media (max-width: 600px)': {paddingLeft: 35}}}
          size='md'
          icon={
            <ThemeIcon color="#DEBF79" sx={{backgroundColor: "#DEBF79"}} size={1} radius="xl">
              <img height="13" width="13" src='https://i.ibb.co/LY4Bt2r/Logo.png' alt=''></img>
            </ThemeIcon>
          }
        >
          {puzzleArray.map((person) => {
               return <List.Item key={person}>{person}</List.Item>
            })
          }
        </List>
      }
    </div>
  )
}
// in state hold the 2 arrays in the readme and pass both of them into a function placed inside of the button we have to click
// when button is clicked call the function in data and then use the notification provider to display that the operation is done?
// gold list dots and light text
// same padding as everything else of course.

// TODO #DEBF79 
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
