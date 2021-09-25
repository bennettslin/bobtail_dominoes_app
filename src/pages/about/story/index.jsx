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
Hi, I'm Bennett from the Bobtail Yearlings! Many years ago, I decided that visualizing chordal space was the next phase in my growth as a songwriter. I wanted a way to gamify the process, which is how the idea for Bobtail Dominoes came to me. I then made a prototype out of mosaic bathroom tiles.
                `,
                (
                    <Image {...{ src: dominoesPrototype_reduced }} />
                ),
                `
Each day I would challenge myself to arrange the dominoes into chords. Upon completing a layout, I would strum the chords on my guitar, hoping to find a nice progression for my next song. Over time, I could feel myself developing a keen harmonic intuition.

It later dawned on me that Bobtail Dominoes might work as a tabletop game. So I play tested with a few musician friends and came up with some basic rules. My hope is that a few of you will invent your own variants and share them, just like with classic dominoes!

Whether you're playing by yourself or with friends, Bobtail Dominoes is a fun and challenging game that will help you grow as a musician. I can make that promise with confidence, because it's definitely helped me!
                `,
            ],
        }}
    />
)

export default Component
