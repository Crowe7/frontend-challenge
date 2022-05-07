import React from 'react'
import { NextRouter, useRouter } from 'next/router'
import { Box, Button} from '@mantine/core';
import Logo from '../public/assets/Logo.png'
import Link from 'next/link';
import Image from 'next/image';
export const Navbar = () => {
    const router:NextRouter = useRouter();
    
    let linkInfo: {name: string, href: string} = {
        name: "Home",
        href: "/"
    }
    if(router.pathname !== '/') {
        linkInfo = {
            name: "Home",
            href: "/"
        }
    } else {
        linkInfo = {
            name: "Contact",
            href: "/contact"
        }
    }
        return (
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Image src={Logo} alt="Company Logo"/>
                <Link href={linkInfo.href}>
                    <Button variant="subtle" sx={{color: "#DEBF79"}} component="a">{linkInfo.name}</Button>
                </Link>
            </Box>
        )
}
