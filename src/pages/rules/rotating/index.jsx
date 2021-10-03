import React from 'react'
import DominoSvg from '../../../components/Svgs/Domino'
import Page from '../../../containers/Page'
import { getPageConfigForId } from '../../../utils/pages/rules'
import rotatingInvalidPlace from '../../../assets/svgs/rules/rotatingInvalidPlace'
import rotatingInvalidChord from '../../../assets/svgs/rules/rotatingInvalidChord'
import rotatingValid from '../../../assets/svgs/rules/rotatingValid'

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
                    <DominoSvg {...{ src: rotatingInvalidPlace }} />
                ),
                `
This domino rotation must not break any existing chord or form invalid chords. Only dyads may be formed and broken at will.
                `,
                (
                    <DominoSvg {...{ src: rotatingInvalidChord }} />
                ),
                `
If a domino rotation results in a new chord, the player who rotated the domino gets credit for building that chord on their turn.
                `,
                (
                    <DominoSvg {...{ src: rotatingValid }} />
                ),
            ],
        }}
    />
)

export default Component
