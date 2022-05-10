import React from 'react'
import { NextRouter, useRouter } from 'next/router'
import { Box, Button, createStyles, Image} from '@mantine/core';
import Link from 'next/link';


const useStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
        padding: 90,
        height: 130,
        '@media (max-width: 620px)': {padding: 30}
    },

    headerLink: {
        color: "#DEBF79",
        fontSize: "1.1em",
        padding: 0,
        margin: 0,
        '&:hover': {
            backgroundColor: 'inherit'
        },
    },
    
    logo: {
        '@media (max-width: 620px)': {width: "70%"}
    }
}))

export const Navbar = () => {

    const { classes } = useStyles()
    // Checks path so it can update the link to either home or contact according to current path 
    const router:NextRouter = useRouter();

    let linkInfo: {name: string, href: string} = {
        name: "home",
        href: "/"
    }
    if(router.pathname !== '/') {
        linkInfo = {
            name: "home",
            href: "/"
        }
    } else {
        linkInfo = {
            name: "contact",
            href: "/contact"
        }
    }
        return (
            <Box className={classes.wrapper}>
                <Image
                    src='https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Logo.png'
                    alt='Company logo'
                    className={classes.logo}
                />
                <Link href={linkInfo.href}>
                    <Button variant="subtle" className={classes.headerLink} component="a">{linkInfo.name}</Button>
                </Link>
            </Box>
        )
}
