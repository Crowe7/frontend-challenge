/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from 'next'
import { LoremBoxes } from '../components/LoremBoxes'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { ContactItems, HomeItems } from '../types'


import { arrayOne, arrayTwo, noDuplicates,  } from '../data/ArrayPuzzle'
import { Box, Button, List, Text, ThemeIcon, Title } from '@mantine/core'
import { useState } from 'react'
import { NotificationProps, showNotification, updateNotification } from '@mantine/notifications'

const Home: NextPage<{home: HomeItems[]}> = ({ home }) => {

  const [puzzleArray, setPuzzleArray] = useState<string[]>([]);

  // callback function that updates notification after arrays are combined and displayed
  const updatePuzzleAndNotification = (updateArrayNotification: { (notification: NotificationProps & { id: string }): void;}) => {

      setPuzzleArray(noDuplicates(arrayOne, arrayTwo));
      updateArrayNotification({
        id: "combine-arrays",
        title: "Combined Arrays.",
        message: "Data is displayed below!",
        autoClose: 2000,
        styles: (theme) => ({
          root: {
            '&::before': {backgroundColor: "#DEBF79"},
          }
        })
      })
  }
  
  return (
    <div>

      <style global jsx> {`
        html,
        body {
          background: {#222222}
        }
      `}</style>

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
                    onClick={() => {
                      showNotification({
                        id: "combine-arrays",
                        loading: true,
                        message: "Combining arrays...",
                        autoClose: false,
                        disallowClose: true,
                      });

                      updatePuzzleAndNotification(updateNotification);
                    }}

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
