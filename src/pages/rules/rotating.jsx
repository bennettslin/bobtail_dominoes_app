import React from 'react'
import DominoesSvg from '../../components/Svgs/Dominoes'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/rules'
import rotatingValid from '../../assets/svgs/rules/rotatingValid'
import rotatingInvalid from '../../assets/svgs/rules/rotatingInvalid'
import rotatingScore from '../../assets/svgs/rules/rotatingScore'

const ID = 'rotating'
const TITLE = 'Rotating dominoes'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            titleHeading: TITLE,
            metaTitle: TITLE,
            metaDescription: `Ways to rotate dominoes on a given turn.`,
            body: [
                `
A domino that is already on the board may be shifted only by rotating in place.

At any number of times during your turn, you may rotate a single domino on the board by pivoting around one of its notes, or by spinning around its center to swap its two notes.
                `,
                (
                    <DominoesSvg {...{ src: rotatingValid }} />
                ),
                `
This domino rotation must not break any existing chord or form invalid chords. Only dyads may be formed and broken at will.
                `,
                (
                    <DominoesSvg {...{ src: rotatingInvalid }} />
                ),
                `
If a domino rotation results in a new chord, the player who rotated the domino gets credit for building that chord on their turn.
                `,
                (
                    <DominoesSvg {...{ src: rotatingScore }} />
                ),
            ],
        }}
    />
)

export default Component
