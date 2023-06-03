import React from 'react'
import Image from '../../components/Image'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/about'
import prototype_reduced from '../../assets/images/prototype_reduced.jpg'

const ID = 'story'
const TITLE = 'Our story'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            titleHeading: TITLE,
            metaTitle: TITLE,
            body: [
                `
Hi, I'm Bennett from the Bobtail Yearlings! Some time ago, I realized that in order to improve as a songwriter, I needed to visualize chordal space. After struggling to get started, I decided to gamify the process. That's when the idea for Bobtail Dominoes came to me, and I made this prototype from mosaic bathroom tiles.
                `,
                (
                    <Image {...{ src: prototype_reduced }} />
                ),
                `
Each day, I would challenge myself to arrange the dominoes into chords. I would then strum the chords on my guitar, hoping to come up with a nice progression for my next song. As time went on, I began to dream in chordal space, and I could feel myself developing a better harmonic intuition.

Of course, it was obvious all along that Bobtail Dominoes could be a tabletop game for multiple players. So I play tested with some musician friends, and we came up with a set of rules that work well. My hope is that some of you will invent your own variants and share them, just like with classic dominoes!
                `,
            ],
        }}
    />
)

export default Component
