import { Box, Button, CSSObject, SimpleGrid, Text, Textarea, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'path'


import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { ContactItems, HomeItems } from '../types'


const Contact: NextPage<{contact: ContactItems[]}> = ({contact}) => {
    // ask how to do this better..
    // splitting "Heading One" up into two seperate strings so i can set a span to be the first to add the underline
    const headingSplit:string[] = contact[0].title.split(' ');

    // justify heading one center at tablet screen sizes
    // on mobile remove gradiant and just set the form box background color to be white

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

    // so i dont have to style each input seperately.
    const formInputStyles: CSSObject = {
        input: {
            backgroundColor: "#F5F5F5",
            color: "#858585",
            padding: 24,
            "&:focus": {border: "1px solid #DEBF79 !important"}
            
        }
    }


    return (
        <Box sx={{background: "linear-gradient(to right, #222222 0%, #222222 50%, #ffffff 50%, #ffffff 100%)",
                    height: "100vh",
                    '@media (max-width: 1150px)': {background: "#222222"},
                }}>
           <Navbar/>

           <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                '@media (max-width: 1150px)': {flexDirection: "column", justifyContent: "center", alignItems: "center"},
            }}>
                <Box sx={{
                    paddingLeft: 90,
                    paddingRight: 90,
                    marginTop: 160,
                    height: 300,
                    width: 660,
                    '@media (max-width: 1150px)': {marginTop: 20, paddingLeft: 30, paddingRight: 30},
                    '@media (max-width: 600px)': {height: 350, width: 415},
                }}>
                    <Title sx={{fontSize: "3.1rem"}} order={1}><span style={{ borderBottom: "4px solid #DEBF79" }}>{headingSplit[0]} </span>{headingSplit[1]}</Title>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        paddingTop: 30,
                        wordSpacing: 3,
                        '@media (max-width: 1150px)': {wordSpacing: 1.5},
                    }}>
                        <Text>{contact[0].paragraph}</Text>
                        <Text>{contact[0].paragraphTwo}</Text>
                    </Box>
                </Box>

                <Box sx={{
                    paddingRight: 90,
                    marginTop: 80,
                    width: 630,
                    display: "flex",
                    flexDirection: "column",
                    '@media (max-width: 1150px)': {marginTop: 0, paddingTop: 60, paddingLeft: 30, paddingRight: 30, backgroundColor: "white", width: "100vw"},
                }}>
                    <Title sx={{color: "#222222", fontSize: "2.2rem", paddingBottom: 30}} order={2}>Heading Two</Title>
                    <form onSubmit={contactForm.onSubmit((values) => console.log(values))}>
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
                            sx={{paddingTop: 20, marginBottom: 20}}
                            styles={{
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
                        <Box sx={{
                            display: "flex", 
                            justifyContent: "center"
                        }}>
                            <Button radius="xs" size="md" type="submit"
                                style={{marginBottom: 50}}
                                styles={(theme) => ({
                                    root: {
                                        fontSize: ".8rem",
                                        color: "#FFFFFF",
                                        backgroundColor: "#DEBF79",
                                        paddingLeft: 40,
                                        paddingRight: 40,
                                        '&:hover': {
                                            backgroundColor: theme.fn.darken('#DEBF79', 0.05),
                                        },
                                    },
                                })}
                            >
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>

            </Box>


        </Box>
    )
}

export const getStaticProps:GetStaticProps = async () => {
    const contactFetch: ContactItems[]  = await fetch('http://localhost:8080/lorem/Contact')
    .then(res => res.json());

    return {
        props: {
            contact: contactFetch
        },
    }
};

export default Contact
