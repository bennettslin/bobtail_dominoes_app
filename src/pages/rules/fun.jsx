import React from 'react'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/rules'

const ID = 'fun'
const TITLE = 'Musical fun'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            titleHeading: TITLE,
            metaTitle: TITLE,
            metaDescription: `Fun ways to play the game.`,
            body: [
                `
- Bring your musical instrument to the game! It's easier to recognize a valid chord once you hear it. You can also jam out while waiting on your turn!

- Chords joined together in a bunch can often be arranged into a sensible progression. So start every songwriting session with a game of Bobtail Dominoes!

- Take a picture of the final board and keep it for future reference!
                `,
            ],
        }}
    />
)

export default Component
