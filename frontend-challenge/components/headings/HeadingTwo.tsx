import { createStyles, Title } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
    title: {
        color: "#222222",
        fontSize: "2.2rem",
    }
}))

type MyProps = {
    TitleText: String
}



export const HeadingTwo = ({TitleText}: MyProps) => {
    const { classes } = useStyles() 
  return (
    <Title className={classes.title} order={2}>{TitleText}</Title>
  )
}


