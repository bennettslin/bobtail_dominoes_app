import React from 'react'
import DominoesSvg from '../../components/Svgs/Dominoes'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/rules'
import setupSet from '../../assets/svgs/rules/setupSet'

const ID = 'setup'
const TITLE = 'Setting up'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            titleHeading: TITLE,
            metaTitle: TITLE,
            body: [
                `
The standard set consists of 48 dominoes representing all possible whole tones, minor and major thirds, and perfect fourths. The extended set includes semitones and tritones, for a total of 66 dominoes.
                `,
                (
                    <DominoesSvg {...{
                        src: setupSet,
                        scaleFactor: 0.66,
                    }} />
                ),
                `
We recommend the standard set for beginners. Advanced players may choose to play with the extended set.

Before starting the game, the players should decide on which chords to allow. We recommend the ones listed on our [chord checker](/guides/chords) page. Jazz chords and set theory collections are also possible.

The players should also agree on the maximum number of dominoes held in each player's hand. We recommend three for beginners. Advanced players may choose four.

Place all dominoes face down to form a pool. Each player draws a single domino. The player with the domino that has a note closest to C, in ascending order, goes first. To break a tie, compare each domino's second note.

Reshuffle the pool. Draw a single domino and place it face up to begin the board. Each player now draws the maximum number of dominoes into their hand.
                `,
            ],
        }}
    />
)

export default Component
