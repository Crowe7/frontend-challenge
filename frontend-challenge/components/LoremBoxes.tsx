/* eslint-disable @next/next/no-img-element */
import { AspectRatio, Box, Button, Image, SimpleGrid, Text, Title } from '@mantine/core'
import React from 'react'
import { HomeItems } from '../types'

type MyProps = {
    Boxes: HomeItems[]
}

export const LoremBoxes = ({Boxes}: MyProps) => {
  return (
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        
    }}>
        <SimpleGrid 
            cols={3}
            spacing={'xl'}
            breakpoints={[
                {maxWidth: 1000, cols:1}
            ]}
        >
            {Boxes.map((info) => {
                    return (
                        <Box key={info._id} sx={{
                            backgroundColor: "#F5F5F5",
                            height: 400,
                            width: 400,
                            borderRadius: "3px",
                            '@media (max-width: 1250px)': {width: 375, height: 375},
                            '@media (max-width: 1170px)': {width: 350, height: 350},
                            '@media (max-width: 1100px)': {width: 325, height: 325},
                            '@media (max-width: 1000px)': {width: 400, height: 400}
                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                paddingTop: 30,
                                paddingBottom: 30,
                                '@media (max-width: 1100px)': {paddingTop: 5},
                                '@media (max-width: 1000px)': {paddingTop: 30}
                            }} >
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 130,
                                }}>
                                    <img src={info.imageUrl} alt={info.name}></img>
                                </Box>

                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 15,
                                    paddingLeft: 55,
                                    paddingRight: 55,
                                    paddingBottom: 25,
                                    '@media (max-width: 1250px)': {paddingLeft: 35, paddingRight: 35, paddingBottom: 15, },
                                    '@media (max-width: 1170px)': {paddingLeft: 35, paddingRight: 35, paddingBottom: 5, },
                                    '@media (max-width: 1000px)': {paddingLeft: 55, paddingRight: 55, paddingBottom: 25, }
                                }} >
                                    <Title sx={{color: "#222222"}} order={1}>{info.title}</Title>

                                    <Text sx={{
                                                color: "#858585", 
                                                '@media (max-width: 1170px)': {fontSize: ".85rem" }, 
                                                '@media (max-width: 1100px)': {fontSize: ".75rem" },
                                                '@media (max-width: 1000px)': {fontSize: ".95rem" },

                                            }} weight='400' size='sm'>
                                        {info.paragraph}
                                    </Text>
                                </Box>

                                <Button radius="xs" size="md"

                                    styles={(theme) => ({
                                        root: {
                                            fontSize: ".8rem",
                                            color: "#F5F5F5",
                                            backgroundColor: "#DEBF79",
                                            '&:hover': {
                                                backgroundColor: theme.fn.darken('#DEBF79', 0.05),
                                            },
                                        },
                                    })}
                                    >
                                    Learn More
                                </Button>

                            </Box>
                        </Box>
                    )
                })
            }
        </SimpleGrid>
    </Box>
  )
}

