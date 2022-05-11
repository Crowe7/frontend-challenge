import { Button, createStyles } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
    button: {
        fontSize: ".8rem",
        color: "#F5F5F5",
        backgroundColor: "#DEBF79",
        '&:hover': {
            backgroundColor: theme.fn.darken('#DEBF79', 0.05),
        },
    }
}))



export const LearnMoreButton = () => {
    const { classes } = useStyles() 
  return (
    <Button className={classes.button} radius="xs" size="md">Learn More</Button>
  )
}
 //                     <HeadingOne UnderLinedText={headingSplit[0]} AfterText={headingSplit[1]} />