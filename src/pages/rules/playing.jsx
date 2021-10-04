import React from 'react'
import DominoSvg from '../../components/Svgs/Domino'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/rules'
import playingValid from '../../assets/svgs/rules/playingValid'
import playingInvalid from '../../assets/svgs/rules/playingInvalid'

const ID = 'playing'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            titleHeading: 'Playing your turn',
            body: [
                `
When it's your turn, place a single domino from your hand onto the board to build at least one valid chord. In doing so, you may form any number of dyads, or two faces in a row.
                `,
                (
                    <DominoSvg {...{ src: playingValid }} />
                ),
                `
However, every three or more faces in a row must be a valid chord. No row may have duplicate faces.
                `,
                (
                    <DominoSvg {...{ src: playingInvalid }} />
                ),
                `
The remaining dominoes in your hand may be played in the same manner until none are left. Upon ending your turn, draw new dominoes until you have the maximum number in your hand, or until the pool is empty. Play passes to your left.

Instead of placing dominoes on the board, you may use your turn to exchange all, some, or none of the dominoes in your hand. Draw the new dominoes from the pool, return your discarded ones, and reshuffle. This ends your turn.

The game ends when no dominoes are left in the pool and a player empties their hand, or when no possible plays are left to be made.

Don't forget to take a picture of the final board!
                `,
            ],
        }}
    />
)

export default Component