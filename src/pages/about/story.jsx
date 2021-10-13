import React from 'react'
import Image from '../../components/Image'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/about'
import prototype_reduced from '../../assets/images/prototype_reduced.jpg'

const ID = 'story'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            titleHeading: 'Our story',
            body: [
                `
Hi, I'm Bennett from the Bobtail Yearlings! Some time ago, I decided that visualizing chordal space was the next phase in my growth as a songwriter. After struggling to get started, I realized that I needed to gamify the process. That's when the idea for Bobtail Dominoes hit me, and I made this prototype from mosaic bathroom tiles.
                `,
                (
                    <Image {...{ src: prototype_reduced }} />
                ),
                `
Each day, I would challenge myself to arrange the dominoes into chords. I would then strum the chords on my guitar, hoping to come up with a nice progression for my next song. As time went on, I began to dream in chordal space, and I could feel myself developing a keen harmonic intuition.

Of course, it was obvious all along that Bobtail Dominoes could be a tabletop game. After play testing with some musician friends, I came up with a set of rules that we all thought worked well. My hope is that a few of you will invent your own variants and share them, just like with classic dominoes!
                `,
            ],
        }}
    />
)

export default Component
