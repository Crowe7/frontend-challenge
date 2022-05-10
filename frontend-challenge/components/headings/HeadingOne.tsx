import { createStyles, Title } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
    textWrapper: {
        fontSize: "3.1rem",
    },
    underline: {
        borderBottom: "4px solid #DEBF79" 
    }
}))

type MyProps = {
    UnderLinedText: String,
    AfterText: string
}

export const HeadingOne = ({UnderLinedText, AfterText}: MyProps) => {
    const { classes } = useStyles()
  return (
    <Title className={classes.textWrapper} order={1}><span className={classes.underline}>{UnderLinedText}</span> {AfterText}</Title>
  )
}

