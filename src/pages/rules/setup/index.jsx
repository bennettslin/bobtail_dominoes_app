import React from 'react'
import DominoSvg from '../../../components/Svgs/Domino'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/rules'
import dominoesExtendedSet from '../../../assets/svgs/rules/dominoesExtendedSet'

const id = 'setup'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Setting up',
            body: [
                `
The standard set consists of 48 dominoes representing all possible whole tones, minor and major thirds, and perfect fourths. The extended set includes semitones and tritones as well, for a total of 66 dominoes.
                `,
                (
                    <DominoSvg {...{
                        src: dominoesExtendedSet,
                        scaleFactor: 0.66,
                    }} />
                ),
                `
We recommend the standard set, but advanced players may choose to play the extended set.

Before playing, the players should decide on which chords to allow. We recommend the chords listed on this website, but extended jazz chords and set theory collections are also possible.

The players should also agree on the maximum number of dominoes held in each player's hand. We recommend three, but advanced players may choose four or five.

Place all dominoes face down to form a pool. Each player draws a single domino. The player with a domino face closest to C, in ascending order, goes first. To break a tie, compare the other face.

Reshuffle the pool. Draw a single domino and place it face up to begin the board. Each player now draws the maximum number of dominoes into their hand.
                `,
            ],
        }}
    />
)

export default Component
