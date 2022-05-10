import { Box, createStyles, List, ThemeIcon } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
    peopleList: {
        // this should be in the page itself instead of here if the componenet were to be reusable 
        paddingLeft: 95,
        marginBottom: 20, 
        paddingTop: 10, 
        '@media (max-width: 600px)': {paddingLeft: 35}
    },
    icon: {
        backgroundColor: "#DEBF79"
    }
}))

type MyProps = {
    People: String[],
}
export const ArrayPuzzleList = ({People}: MyProps) => {
    const { classes } = useStyles()
  return (
    <Box>
        {People.length !==0 &&
                // checks if the puzzleArray state has updated then maps out the individuals onto an onordered list below.. key is set to them because they are non duplicates by default.
            <List size='md' className={classes.peopleList}
                icon= {
                        <ThemeIcon color="#DEBF79" className={classes.icon} size={1} radius="xl">
                            <img height="13" width="13" src='https://i.ibb.co/LY4Bt2r/Logo.png' alt=''></img>
                        </ThemeIcon>
                }
            >
            {People.map((person) => {
                return <List.Item key={`${person}`}>{person}</List.Item>
            })
            }
            </List>
        }
    </Box>
  )
}
// <ArrayPuzzleList People={puzzleArray}