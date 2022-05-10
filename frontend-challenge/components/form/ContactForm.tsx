import { Box, Button, createStyles, CSSObject, SimpleGrid, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import React from 'react'
import { SubmitFormButton } from '../buttons/SubmitFormButton'

// couldnt get mantine to style it properly using usestyles
const formInputStyles: CSSObject = {
    input: {
        backgroundColor: "#F5F5F5",
        color: "#858585",
        padding: 24,
        "&:focus": {border: "1px solid #DEBF79 !important"}
        
    }
}
const useStyles = createStyles((theme) => ({
    textArea: {
        paddingTop: 20, 
        marginBottom: 20
    },

    submitButton: {
        display: "flex", 
        justifyContent: "center",
        marginBottom: 50
    }

}))

type MyProps = {
    submitContact: Function 
}

export const ContactForm = ({submitContact}: MyProps) => {
    const { classes } = useStyles()


    const contactForm = useForm({
        initialValues: {
            first_name: '',
            last_name: '',
            title: '',
            email: '',
            message: '',
        },

        validate: {
            // from mantine docs for validating email
            // set text underneath box instead of inside.. Could remove validation/ change it to say required to make the text fit inside nicely
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Required Valid Email'),
        },
    });
    return (
        <form onSubmit={contactForm.onSubmit((values) => submitContact(values))}>

        <SimpleGrid
            cols={2}
            spacing={"lg"}
            breakpoints={[
                {maxWidth: 700, cols:1}
            ]}
        >
            <TextInput
                sx={formInputStyles}
                radius="xs"
                placeholder="First Name"
                {...contactForm.getInputProps('first_name')}
            />                           
            <TextInput
                sx={formInputStyles}
                radius="xs"                           
                placeholder="Last Name"
                {...contactForm.getInputProps('last_name')}
            />
            <TextInput
                sx={formInputStyles}
                radius="xs"                           
                placeholder="Title"
                {...contactForm.getInputProps('title')}
            />
            <TextInput
                styles={{
                    error: {
                        color: "#800000",
                        
                    },
                    invalid: {
                        borderColor: "#800000",
                        color: "#858585",
                        "&::placeholder": {color: "#858585"}
                    },
                }}
                sx={formInputStyles}
                radius="xs"                            
                placeholder="Email"
                {...contactForm.getInputProps('email')}
            />

        </SimpleGrid>

        <Textarea
            className={classes.textArea}
            styles={{
                // This should be styled on page
                input: { 
                        backgroundColor: "#F5F5F5", 
                        color: "#858585", 
                        "&:focus": {border: "1px solid #DEBF79 !important"},
                        '@media (max-width: 1150px)': {paddingBottom: 140},
                    },
              }}
            minRows={6}  
            placeholder="Message"
            {...contactForm.getInputProps('message')}
        />

        <Box className={classes.submitButton}>
              <SubmitFormButton />
        </Box>
    </form>
    )
}
