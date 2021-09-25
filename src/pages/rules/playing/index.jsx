import React from 'react'
import DominoSvg from '../../../components/Svgs/Domino'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/rules'
import dominoesPlayingValid from '../../../assets/svgs/rules/dominoesPlayingValid'
import dominoesPlayingInvalid from '../../../assets/svgs/rules/dominoesPlayingInvalid'

const id = 'playing'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Playing your turn',
            body: [
                `
When it's your turn, place a single domino from your hand onto the board to build at least one valid chord. In doing so, you are permitted to form any number of dyads, or two faces in a row.
                `,
                (
                    <DominoSvg {...{ src: dominoesPlayingValid }} />
                ),
                `
However, any three or more faces in a row must be a valid chord. No row may have duplicate faces.
                `,
                (
                    <DominoSvg {...{ src: dominoesPlayingInvalid }} />
                ),
                `
The remaining dominoes in your hand may be played in the same manner until none are left. Upon ending your turn, draw new dominoes until you have the maximum number in your hand, or until the pool is empty. Play passes to your left.

Instead of placing any dominoes on the board, you may use your turn to exchange all, some, or none of the dominoes in your hand. Draw the new dominoes from the pool, return your discarded ones, and reshuffle. This ends your turn.

The game ends when no dominoes are left in the pool and a player empties their hand, or when no possible plays are left to be made.

Don't forget to take a picture of the final board!
                `,
            ],
        }}
    />
)

export default Component
