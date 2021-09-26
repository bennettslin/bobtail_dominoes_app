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
Hi, I'm Bennett from the Bobtail Yearlings! Years ago, I decided that learning to visualize chordal space was the next phase in my growth as a songwriter. After several false starts, I realized that I needed to gamify the process. That's when the idea for Bobtail Dominoes came to me somehow. So I made a prototype out of mosaic bathroom tiles to try it out.
                `,
                (
                    <Image {...{ src: dominoesPrototype_reduced }} />
                ),
                `
Each day I would challenge myself to arrange the dominoes into chords. Upon finishing a layout, I would strum the chords on my guitar, hoping to find a nice progression for my next song. I began to dream in chordal space, and over time I could feel myself developing a keen harmonic intuition.

Of course, it was always obvious that Bobtail Dominoes could be a tabletop game. After play testing with some musician friends, I came up with a set of rules that worked well. My hope is that a few of you will invent your own variants and share them, just like with classic dominoes!

Whether playing by yourself or with friends, Bobtail Dominoes is a fun and challenging game that will help you grow as a musician. I can make that promise with confidence, because I know it's helped me!
                `,
            ],
        }}
    />
)

export default Component
