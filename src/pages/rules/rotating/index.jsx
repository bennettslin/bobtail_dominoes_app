import React from 'react'
import DominoSvg from '../../../components/Svgs/Domino'
import Page from '../../../containers/Page'
import { getPageConfigForId } from '../../../utils/pages/rules'
import dominoesRotatingInvalidPlace from '../../../assets/svgs/rules/dominoesRotatingInvalidPlace'
import dominoesRotatingInvalidChord from '../../../assets/svgs/rules/dominoesRotatingInvalidChord'
import dominoesRotatingValid from '../../../assets/svgs/rules/dominoesRotatingValid'

const id = 'rotating'

const Component = () => (
    <Page
        {...{
            ...getPageConfigForId(id),
            titleHeading: 'Rotating a domino',
            body: [
                `
A domino that is already on the board may only be shifted by rotating in place.

At any number of times during your turn, you may rotate a single domino on the board by pivoting around one of its faces, or by spinning around its center to swap its two faces.
                `,
                (
                    <DominoSvg {...{ src: dominoesRotatingInvalidPlace }} />
                ),
                `
This domino rotation must not break any existing chord or form invalid chords. Only dyads may be formed and broken at will.
                `,
                (
                    <DominoSvg {...{ src: dominoesRotatingInvalidChord }} />
                ),
                `
If a domino rotation results in a new chord, the player who rotated the domino gets credit for building that chord on their turn.
                `,
                (
                    <DominoSvg {...{ src: dominoesRotatingValid }} />
                ),
            ],
        }}
    />
)

export default Component
