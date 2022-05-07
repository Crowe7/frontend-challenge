import React from 'react'
import { NextRouter, useRouter } from 'next/router'
import { Box, Button} from '@mantine/core';
import Logo from '../public/assets/Logo.png'
import Link from 'next/link';
import Image from 'next/image';
export const Navbar = () => {
    const router:NextRouter = useRouter();
    // This needs to be DRY instead of whatever this currently is..
    let linkInfo: {name: string, href: string} = {
        name: "Home",
        href: "/"
    }
    if(router.pathname !== '/') {
        return (
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Image src={Logo} alt="Company Logo"/>
                <Link href='/'>
                    <Button variant="subtle" sx={{color: "#DEBF79"}} component="a">Home</Button>
                </Link>
            </Box>
        )
    } else {
        return (
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Image src={Logo} alt="Company Logo"/>
                <Link href='/contact'>
                    <Button variant="subtle" sx={{color: "#DEBF79"}} component="a">Contact</Button>
                </Link>
            </Box>
        )
    }

}
