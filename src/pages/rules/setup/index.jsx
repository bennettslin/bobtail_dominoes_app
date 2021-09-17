import React from 'react'
import DominoSvg from '../../../components/Svgs/Domino'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/rules'
import dominoPiecesSemitone from '../../../assets/svgs/rules/dominoPiecesSemitone'

const id = 'setup'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Setting up',
            body: [
                `
The standard set consists of 48 dominoes representing all whole tones, minor and major thirds, and perfect fourths. The extended set includes semitones and tritones as well, for a total of 66 dominoes.
                `,
                (
                    <DominoSvg {...{
                        src: dominoPiecesSemitone,
                        scaleFactor: 0.75,
                    }} />
                ),
                `
We recommend the standard set, but advanced players may choose to play the extended set.

Before playing, the players should decide on which chords to consider valid. We recommend the chords listed on this website, but extended jazz chords and set theory collections are also possible.

The players should also agree on the maximum number of dominoes held in each player's hand. We recommend three, but advanced players may choose four or five.

Place all dominoes face down. Each player draws a single domino from this pool. The player with a domino face closest to C, in ascending order, goes first. To break a tie, compare the other face.

Reshuffle the pool. Draw a single domino and place it on the board. Each player now draws the maximum number of dominoes into their hand.
                `,
            ],
        }}
    />
)

export default Component
