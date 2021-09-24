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
Hi, I'm Bennett from the Bobtail Yearlings. Many years ago, I decided that visualizing chordal space was the next stage in my growth as a songwriter. I wanted a way to gamify the process, and that's when the idea for Bobtail Dominoes came to me.

After making a prototype out of mosaic tiles, I would challenge myself each day to arrange the pieces into chords. It was addictive and satisfying, and I could feel myself developing a keen harmonic intuition.
                `,
                (
                    <Image {...{ src: bobtailDominoesPrototype }} />
                ),
                `
In time, it dawned on me that Bobtail Dominoes would work well as a tabletop game. So I play tested with some musician friends and finalized the basic rules. My hope is that others will invent their own variants, just like with classic dominoes.

Whether you're playing by yourself or with friends, Bobtail Dominoes is a fun and challenging game that will help you grow as a musician. I can make that promise with confidence, because I know how much it's helped me!
            `,
            ],
        }}
    />
)

export default Component
