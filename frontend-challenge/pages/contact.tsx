import { Box, Text, Title } from '@mantine/core'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { ContactItems, HomeItems } from '../types'


const contact: NextPage<{contact: ContactItems[]}> = ({contact}) => {
    // ask how to do this better..
    // splitting "Heading One" up into two seperate strings so i can set a span to be the first to add the underline
    const headingSplit:string[] = contact[0].title.split(' ');
    console.log(contact);
    return (
        <Box sx={{background: "linear-gradient(to right, #222222 0%, #222222 50%, #ffffff 50%, #ffffff 100%)",
                    height: "100vh",
                    '@media (max-width: 1000px)': {background: "linear-gradient(#222222 0%, #222222 50%, #ffffff 50%, #ffffff 100%)"},
                }}>
           <Navbar/>

           <Box sx={{
                display: "flex",
            }}>
                <Box sx={{
                    paddingLeft: 90,
                    paddingRight: 90
                }}>
                    <Title sx={{fontSize: "3.1rem"}} order={1}><span style={{ borderBottom: "4px solid #DEBF79" }}>{headingSplit[0]} </span>{headingSplit[1]}</Title>
                    <Box>
                        <Text>{contact[0].paragraph}</Text>
                        <Text>{contact[0].paragraphTwo}</Text>
                    </Box>
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

export default contact
