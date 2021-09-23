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
Hi, I'm Bennett from the Bobtail Yearlings. Many years ago, I decided that being able to visualize chordal space was the next stage in my growth as a songwriter. I wanted a way to gamify the process, and that's when the idea for Bobtail Dominoes came to me. 

So I made a prototype out of mosaic bathroom tiles, and each day I would challenge myself to build chords in a hexagonal lattice.
                `,
                (
                    <Image {...{ src: bobtailDominoesPrototype }} />
                ),
                `
It later dawned on me that Bobtail Dominoes would work well as a tabletop game. I then came up with a set of rules and play tested with some musician friends.

While you're challenging yourself or having fun with friends, Bobtail Dominoes will improve your skills as a musician. I know they've improved mine!
            `,
            ],
        }}
    />
)

export default Component
