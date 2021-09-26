import React from 'react'
import Page from '../../../containers/Page'
import Image from '../../../components/Image'
import { pagesMap } from '../../../content/about'
import dominoesPrototype_reduced from '../../../assets/images/dominoesPrototype_reduced.jpg'

const id = 'story'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Our story',
            body: [
                `
Hi, I'm Bennett from the Bobtail Yearlings! Years ago, I decided that learning to visualize chordal space was the next phase in my growth as a songwriter. After several false starts, I realized that I needed to gamify the process. And so one day, the idea for Bobtail Dominoes came to me. To test it, I made a prototype out of mosaic bathroom tiles.
                `,
                (
                    <Image {...{ src: dominoesPrototype_reduced }} />
                ),
                `
Each day, I would challenge myself to arrange the dominoes into chords. Upon finishing a layout, I would strum the chords on my guitar, hoping to find a nice progression for my next song. And over time, I could feel myself developing a keen harmonic intuition.

It later dawned on me that Bobtail Dominoes could work as a tabletop game. So I play tested with a few musician friends and came up with some basic rules. My hope is that a few of you will invent your own variants and share them, just like with classic dominoes!

Whether playing by yourself or with friends, Bobtail Dominoes is a fun and challenging game that will help you grow as a musician. I can make that promise with confidence, because I know it's helped me!
                `,
            ],
        }}
    />
)

export default Component
