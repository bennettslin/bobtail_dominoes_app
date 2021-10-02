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
Hi, I'm Bennett from the Bobtail Yearlings! Years ago, I decided that visualizing chordal space was the next phase in my growth as a songwriter. After a few false starts, I realized that I needed to gamify the process, and that's when the idea for Bobtail Dominoes came to me. So I made a prototype from mosaic bathroom tiles to try it out.
                `,
                (
                    <Image {...{ src: dominoesPrototype_reduced }} />
                ),
                `
Each day I would challenge myself to arrange the dominoes into chords. Upon finishing a layout, I would strum the various chords on my guitar, hoping to come up with a nice progression for my next song. I started dreaming in chordal space, and over time I could feel myself developing a keen harmonic intuition.

Of course, it was obvious all along that Bobtail Dominoes could be a tabletop game. Through play testing with some musician friends, I came up with a set of rules that we all thought worked well. My hope is that a few of you will invent your own variants and share them, just like with classic dominoes!
                `,
            ],
        }}
    />
)

export default Component
