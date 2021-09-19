import React from 'react'
import DominoSvg from '../../../components/Svgs/Domino'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/rules'
import dominoesPlayingValid from '../../../assets/svgs/rules/dominoesPlayingValid'

const id = 'rotating'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Rotating dominoes',
            body: [
                `
No domino that was previously placed on the board may be moved or shifted. However, it may be rotated in place.

At any number of times during your turn, a domino may be rotated either by pivoting around one of its faces or by spinning around its center, which effectively swaps the two faces.
                `,
                (
                    <DominoSvg {...{ src: dominoesPlayingValid }} />
                ),
                `
The rotation must not break any existing chord or form invalid chords. Dyads may be formed and broken at will.
                `,
                (
                    <DominoSvg {...{ src: dominoesPlayingValid }} />
                ),
                `
If a domino rotation results in building a new chord, the player who rotated the domino earns the points for building that chord on their turn.
                `,
                (
                    <DominoSvg {...{ src: dominoesPlayingValid }} />
                ),
            ],
        }}
    />
)

export default Component
