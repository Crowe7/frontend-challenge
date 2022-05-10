/* eslint-disable @next/next/no-img-element */
import { AspectRatio, Box, Button, createStyles, Image, SimpleGrid, Text, Title } from '@mantine/core'
import React from 'react'
import { HomeItems } from '../types'
import { LearnMoreButton } from './buttons/LearnMoreButton'
import { HeadingTwo } from './headings/HeadingTwo'

type MyProps = {
    Boxes: HomeItems[]
}

const useStyles = createStyles((theme) => ({
    boxWrapper: {
        display: "flex",
        justifyContent: "center",
    },

    outerBox: {
        backgroundColor: "#F5F5F5",
        height: 400,
        width: 400,
        borderRadius: "3px",
        '@media (max-width: 1250px)': {width: 375, height: 375},
        '@media (max-width: 1170px)': {width: 350, height: 350},
        '@media (max-width: 1100px)': {width: 325, height: 325},
        '@media (max-width: 1000px)': {width: 400, height: 400},
    },

    contentWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 30,
        paddingBottom: 30,
        '@media (max-width: 1100px)': {paddingTop: 5},
        '@media (max-width: 1000px)': {paddingTop: 30},
    },

    img: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 130,
    },

    textWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 15,
        paddingLeft: 55,
        paddingRight: 55,
        paddingBottom: 25,
        '@media (max-width: 1250px)': {paddingLeft: 35, paddingRight: 35, paddingBottom: 15, },
        '@media (max-width: 1170px)': {paddingLeft: 35, paddingRight: 35, paddingBottom: 5, },
        '@media (max-width: 1000px)': {paddingLeft: 55, paddingRight: 55, paddingBottom: 25, }
    },

    text: {
        color: "#858585", 
        '@media (max-width: 1170px)': {fontSize: ".85rem" }, 
        '@media (max-width: 1100px)': {fontSize: ".75rem" },
        '@media (max-width: 1000px)': {fontSize: ".95rem" },
    }

}))

export const LoremBoxes = ({Boxes}: MyProps) => {

    const { classes } = useStyles()

  return (
    <Box className={classes.boxWrapper}>
        <SimpleGrid 
            cols={3}
            spacing={'xl'}
            breakpoints={[
                {maxWidth: 1000, cols:1}
            ]}
        >
            {Boxes.map((info) => {
                    return (
                        <Box key={info._id} className={classes.outerBox} >
                            <Box className={classes.contentWrapper}>
                                <Box className={classes.img}>
                                    <img src={info.imageUrl} alt={info.name}></img>
                                </Box>
                                <Box className={classes.textWrapper} >
                                    <HeadingTwo TitleText={info.title} />
                                    <Text weight='400' size='sm' className={classes.text}>{info.paragraph}</Text>
                                </Box>            
                                    <LearnMoreButton />
                            </Box>
                        </Box>
                    )
                })
            }
        </SimpleGrid>
    </Box>
  )
}

