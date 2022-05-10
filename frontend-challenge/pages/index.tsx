/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from 'next'
import { LoremBoxes } from '../components/LoremBoxes'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { ContactItems, HomeItems } from '../types'


import { arrayOne, arrayTwo, noDuplicates,  } from '../data/ArrayPuzzle'
import { Box, Button, createStyles, List, Text, ThemeIcon, Title } from '@mantine/core'
import { useState } from 'react'
import { NotificationProps, showNotification, updateNotification } from '@mantine/notifications'
import { HeadingOne } from '../components/headings/HeadingOne'
import { ArrayPuzzleList } from '../components/ArrayPuzzleList'


const useStyles = createStyles((theme) => ({
  arrayPuzzleWrapper: {
    paddingLeft: 90,
    paddingRight: 90,
    paddingTop: 50,
    '@media (max-width: 600px)': {paddingRight: 30, paddingLeft: 30}
  },

  arrayDisplayButton: {
    color : '#DEBF79',
    padding: 0,
    margin: 0,
    '&:hover': {
      backgroundColor: 'inherit'
    } 
  },

  arrayPuzzleText: {
    marginTop: "40px"
  },

  
}))



const Home: NextPage<{home: HomeItems[]}> = ({ home }) => {
  const { classes} = useStyles()

  const [puzzleArray, setPuzzleArray] = useState<string[]>([]);

  // callback function that updates notification after arrays are combined and displayed
  const updatePuzzleAndNotification = (updateArrayNotification: { (notification: NotificationProps & { id: string }): void;}) => {

    // Sets puzzle array into state and updates the notification provider via callback. 
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

   function arrayButtonOnClick() {
      // this whole chunk could look better.
      // shows inital notification then runs callback to update
      showNotification({
        id: "combine-arrays",
        loading: true,
        message: "Combining arrays...",
        autoClose: false,
        disallowClose: true,
                        
      });
      updatePuzzleAndNotification(updateNotification);
   }
  
  return (
    <Box>
      <Navbar/>

      <LoremBoxes Boxes={home} />

      <Box className={classes.arrayPuzzleWrapper}>

        <HeadingOne UnderLinedText={'Heading'} AfterText={'One'} />

        <Text className={classes.arrayPuzzleText}>
          Remove the duplicates in 2 Javascript arrays (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when 
            <span> <Button variant='subtle' className={classes.arrayDisplayButton} onClick={arrayButtonOnClick}>this link</Button> </span>
          is clicked. if the operation has been completed already, notify the user that this has already been done.
        </Text>

      </Box>

      <ArrayPuzzleList People={puzzleArray} />

    </Box>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  // sets static props for next and calls backend API for getting the lorem text for this page then returns the props for it to be used in the component
  const homeFetch: HomeItems[] = await fetch('http://localhost:8080/lorem/Home')
    .then(res => res.json());

    return {
      props: {
        home: homeFetch,
      },
    }
};
export default Home
