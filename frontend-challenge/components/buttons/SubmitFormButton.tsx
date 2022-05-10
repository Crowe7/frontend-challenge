import { Button, createStyles } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
    button: {
        fontSize: ".8rem",
        color: "#FFFFFF",
        backgroundColor: "#DEBF79",
        paddingLeft: 40,
        paddingRight: 40,
        '&:hover': {
            backgroundColor: theme.fn.darken('#DEBF79', 0.05),
        },
    },


}))



export const SubmitFormButton = () => {
    const { classes } = useStyles()
  return (
    <Button radius="xs" size="md" type="submit" className={classes.button}>Submit</Button>
  )
}


