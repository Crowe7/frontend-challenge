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
        justifyContent: "center"
    }}>
        <SimpleGrid 
            cols={3}
            spacing={'xl'}
        >
            {Boxes.map((info) => {
                    return (
                        <Box key={info._id} sx={{
                            backgroundColor: "#F5F5F5",
                            height: 400,
                            width: 400,
                            borderRadius: "3px"
                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                paddingTop: 30,
                                paddingBottom: 30,
                                
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
                                    paddingBottom: 25
                                }} >
                                    <Title sx={{color: "#222222"}} order={1}>{info.title}</Title>

                                    <Text sx={{color: "#858585"}} weight='400' size='sm'>{info.paragraph}</Text>
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

