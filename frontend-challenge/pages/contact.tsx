import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { ContactItems, HomeItems } from '../types'

const contact:NextPage = () => {
    return (
        <div>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    )
}

export default contact