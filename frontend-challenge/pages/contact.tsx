import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { ContactItems, HomeItems } from '../types'

const contact:NextPage = () => {
    return (
        <div>
            <style global jsx> {`
                html,
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
           <Navbar/>
        </div>
    )
}

export default contact