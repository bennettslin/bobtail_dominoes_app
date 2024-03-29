import React from 'react'
import DominoesSvg from '../../components/Svgs/Dominoes'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/rules'
import playingValid from '../../assets/svgs/rules/playingValid'
import playingInvalid from '../../assets/svgs/rules/playingInvalid'

const ID = 'playing'
const TITLE = 'Playing your turn'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            titleHeading: TITLE,
            metaTitle: TITLE,
            metaDescription: `How to play a single turn.`,
            body: [
                `
When it's your turn, place a single domino from your hand onto the board to build at least one valid chord. In doing so, you may form any number of dyads, or two notes in a row.
                `,
                (
                    <DominoesSvg {...{ src: playingValid }} />
                ),
                `
However, every three or more notes in a row must be a valid chord. No row may have duplicate notes.
                `,
                (
                    <DominoesSvg {...{ src: playingInvalid }} />
                ),
                `
The remaining dominoes in your hand may be played in the same manner until none are left. Upon ending your turn, draw new dominoes until you have the maximum number in your hand, or until the pool is empty. Play passes to your left.

Instead of placing dominoes on the board, you may use your turn to exchange all, some, or none of the dominoes in your hand. Draw the new dominoes from the pool, return your discarded ones, and reshuffle. This ends your turn.

Once the pool is empty, each player gets one more turn before the game ends. The game also ends after each player has exchanged their hand twice in a row.
                `,
            ],
        }}
    />
)

export default Component
