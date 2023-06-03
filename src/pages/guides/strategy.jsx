import React from 'react'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/guides'

const ID = 'strategy'
const TITLE = 'Strategy and tips'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            titleHeading: TITLE,
            metaTitle: TITLE,
            metaDescription: `Quick tips for how to win the game.`,
            body: `
- Three notes make up a triad if every interval between two consecutive notes is a minor third or greater.
- Four notes make up a seventh chord if no interval between two consecutives note is a perfect fourth or greater, and only one at most is a whole tone or less.
- On the board, a domino can either be packed with others in a "bunch," or extend out in the open as a "branch." Generally, you want to form bunches while forcing your opponents to form branches.
            `,
        }}
    />
)

export default Component
