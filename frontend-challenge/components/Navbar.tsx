import React from 'react'
import { NextRouter, useRouter } from 'next/router'
import { Box, Button, Image} from '@mantine/core';
import Link from 'next/link';

export const Navbar = () => {
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
            <Box sx={{display: "flex",
                    justifyContent: "space-between", 
                    alignItems: "center",
                    padding: 90,
                    height: 130,
                    '@media (max-width: 620px)': {padding: 30}
                }}>
                <Image
                    src='https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Logo.png'
                    alt='Company logo'
                    sx={{
                        '@media (max-width: 620px)': {width: "70%"}
                    }}
                />
                <Link href={linkInfo.href}>
                    <Button variant="subtle" 
                        styles={(theme) => ({
                            root: {
                                color: "#DEBF79",
                                fontSize: "1.1em",
                                padding: 0,
                                margin: 0,
                                '&:hover': {
                                    backgroundColor: 'inherit'
                                },
                            }
                        })}
                        component="a">
                        {linkInfo.name}
                    </Button>
                </Link>
            </Box>
        )
}
