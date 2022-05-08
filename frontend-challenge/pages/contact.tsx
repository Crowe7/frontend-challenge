import { Box } from '@mantine/core'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { ContactItems, HomeItems } from '../types'


const contact: NextPage<{contact: ContactItems[]}> = ({contact}) => {
    return (
        <Box sx={{background: "linear-gradient(to right, #222222 0%, #222222 50%, #ffffff 50%, #ffffff 100%)",
                    height: "100vh",
                    '@media (max-width: 1000px)': {background: "linear-gradient(#222222 0%, #222222 50%, #ffffff 50%, #ffffff 100%)"}
                }}>
           <Navbar/>
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

/*
            <style global jsx> {`
            
                body {
                    background: linear-gradient(
                        to right, 
                        #222222 0%, 
                        #222222 50%, 
                        #ffffff 50%, 
                        #ffffff 100%
                        );
                    }
                @media (max-width: 1000px) {
                    body {
                        background: linear-gradient(
                            #222222 0%, 
                            #222222 50%, 
                            #ffffff 50%, 
                            #ffffff 100%
                        )
                    }
                }
            `}</style>
style={{background: "linear-gradient(to right, #222222 0%, #222222 50%, #ffffff 50%, #ffffff 100%)"}}
*/