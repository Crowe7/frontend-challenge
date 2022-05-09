import { Box, Text, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


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
            message: ''
        }
    })

    return (
        <Box sx={{background: "linear-gradient(to right, #222222 0%, #222222 50%, #ffffff 50%, #ffffff 100%)",
                    height: "100vh",
                    '@media (max-width: 1150px)': {background: "linear-gradient(#222222 0%, #222222 50%, #ffffff 50%, #ffffff 100%)"},
                }}>
           <Navbar/>

           <Box sx={{
                display: "flex",
            }}>
                <Box sx={{
                    paddingLeft: 90,
                    paddingRight: 90,
                    marginTop: 160,
                    height: 300,
                    width: 660,
                    '@media (max-width: 1150px)': {marginTop: 20, paddingLeft: 30, paddingRight: 30},
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

                <Box></Box>

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
