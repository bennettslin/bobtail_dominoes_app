import React from 'react'
import DominoSvg from '../../../components/Svgs/Domino'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/rules'
import dominoesPlayingValid from '../../../assets/svgs/rules/dominoesPlayingValid'
import dominoesRotating1 from '../../../assets/svgs/rules/dominoesRotating1'
import dominoesRotating2 from '../../../assets/svgs/rules/dominoesRotating2'

const id = 'rotating'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Rotating dominoes',
            body: [
                `
A domino that was previously placed on the board may not be moved or shifted. However, it may be rotated in place.

At any number of times during your turn, you may rotate a single domino by pivoting it around one of its faces, or by spinning it around its center to effectively swap the two faces.
                `,
                (
                    <DominoSvg {...{ src: dominoesRotating1 }} />
                ),
                `
This domino rotation must not break any existing chord or form invalid chords. Dyads may be formed and broken at will.
                `,
                (
                    <DominoSvg {...{ src: dominoesRotating2 }} />
                ),
                `
If a domino rotation results in a new chord, the player who rotated the domino gets credit for building that chord on their turn.
                `,
                (
                    <DominoSvg {...{ src: dominoesPlayingValid }} />
                ),
            ],
        }}
    />
)

export default Component
