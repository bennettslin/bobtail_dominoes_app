import React from 'react'
import Page from '../../../containers/Page'
import Image from '../../../components/Image'
import { pagesMap } from '../../../content/about'
import bobtailDominoesPrototype from '../../../assets/images/bobtailDominoesPrototype.jpg'

const id = 'story'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Our story',
            body: [
                `
Hi, I'm Bennett from the Bobtail Yearlings. Many years ago, I decided that visualizing chordal space was the next phase in my growth as a songwriter. I wanted a way to gamify the process, and that's when the idea for Bobtail Dominoes came to me.

So I made a prototype out of mosaic tiles, and every day I would challenge myself to build chords in a hexagonal pattern. Upon completing a layout, I would strum the chords on my guitar, hoping to find a nice progression for my next song. And over time, I could feel myself developing a keen harmonic intuition.
                `,
                (
                    <Image {...{ src: bobtailDominoesPrototype }} />
                ),
                `
It eventually dawned on me that Bobtail Dominoes would work well as a tabletop game. And so I play tested with some musician friends and came up with the basic rules. My hope is that a few of you will invent your own variants and share them, just like with classic dominoes.

Whether you're playing by yourself or with friends, Bobtail Dominoes is a fun and challenging game that will help you grow as a musician. I make that promise with confidence, because I can definitely say it's helped me!
            `,
            ],
        }}
    />
)

export default Component
