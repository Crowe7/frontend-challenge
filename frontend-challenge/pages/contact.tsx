import { Box, Button, createStyles, CSSObject, SimpleGrid, Text, Textarea, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'path'
import { ContactForm } from '../components/form/ContactForm'
import { HeadingOne } from '../components/headings/HeadingOne'
import { HeadingTwo } from '../components/headings/HeadingTwo'


import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { ContactInterface, ContactItems, HomeItems } from '../types'

const useStyles = createStyles((theme) => ({
    pageWrapper: {
        background: "linear-gradient(to right, #222222 0%, #222222 50%, #ffffff 50%, #ffffff 100%)",
        height: "100vh",
        '@media (max-width: 1150px)': {background: "#222222"},
    },

    contentWrapper: {
        display: "flex",
        justifyContent: "space-between",
        '@media (max-width: 1150px)': {flexDirection: "column", justifyContent: "center", alignItems: "center"},
    },

    textBoxWrapper: {
        paddingLeft: 90,
        paddingRight: 90,
        marginTop: 160,
        height: 300,
        width: 660,
        '@media (max-width: 1150px)': {marginTop: 20, paddingLeft: 30, paddingRight: 30},
        '@media (max-width: 600px)': {height: 350, width: 415},
    },

    paragraphWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        paddingTop: 30,
        wordSpacing: 3,
        '@media (max-width: 1150px)': {wordSpacing: 1.5},
    },

    formHeadingWrapper: {
        paddingBottom: 30
    },

    formWrapper: {
        paddingRight: 90,
        marginTop: 80,
        width: 630,
        display: "flex",
        flexDirection: "column",
        '@media (max-width: 1150px)': {marginTop: 0, paddingTop: 60, paddingLeft: 30, paddingRight: 30, backgroundColor: "white", width: "100vw"},
    }
}))


const Contact: NextPage<{contact: ContactItems[]}> = ({contact}) => {
    const { classes } = useStyles() 
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

    // could change this to be a try catch that displays a notification when info is sent...
    // passed into the form button under its onSubmit hook from mantine 
    const submitContact = async (body: ContactInterface ) => {
        const res = await fetch(
            'http://localhost:8080/contact',
            {
                body: JSON.stringify(body),     
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                },
                method: 'POST'
            }
        );
        console.log(res.status);
    };

    return (
        <Box className={classes.pageWrapper}>

           <Navbar/>

           <Box className={classes.contentWrapper}>
                <Box className={classes.textBoxWrapper}>

                <HeadingOne UnderLinedText={headingSplit[0]} AfterText={headingSplit[1]} />
                    
                    <Box className={classes.paragraphWrapper}>
                        <Text>{contact[0].paragraph}</Text>
                        <Text>{contact[0].paragraphTwo}</Text>
                    </Box>
                </Box>

                <Box className={classes.formWrapper}>
                    <Box className={classes.formHeadingWrapper}>
                        <HeadingTwo TitleText={"Heading Two"} />                
                    </Box>

                    <ContactForm submitContact={submitContact} contactForm={contactForm} />
                </Box>

            </Box>


        </Box>
    )
}

export const getStaticProps:GetStaticProps = async () => {
    // sets static props for next and calls backend API for getting the lorem text for this page then returns the props for it to be used in the component
    const contactFetch: ContactItems[]  = await fetch('http://localhost:8080/lorem/Contact')
    .then(res => res.json());

    return {
        props: {
            contact: contactFetch
        },
    }
};

export default Contact
