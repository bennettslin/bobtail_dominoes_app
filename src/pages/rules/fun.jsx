import React from 'react'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/rules'

const ID = 'fun'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            titleHeading: 'Musical fun',
            body: [
                `
- Bring your musical instrument to the game! It's easier to recognize a valid chord when you sound it out. You can also jam out with the other players who are waiting on their turn!

- Since chords that intersect in a bunch will be musically related, they can often be arranged into a sensible chord progression. So start every songwriting session with a game of Bobtail Dominoes!

- Take a picture of the final board and post it with a #BobtailDominoes hashtag on [Facebook](https://www.facebook.com/hashtag/BobtailDominoes), [Instagram](https://www.instagram.com/explore/tags/BobtailDominoes), and [Twitter](https://twitter.com/hashtag/BobtailDominoes)!
                `,
            ],
        }}
    />
)

export default Component
