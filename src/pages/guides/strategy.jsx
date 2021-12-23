import React from 'react'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/guides'

const ID = 'strategy'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            titleHeading: 'Strategy and tips',
            body: `
- Any three notes make up a valid triad if each note is separated from the others by a minor third or greater.
- Any four notes make up a valid seventh chord if only two notes at most are separated by a whole tone or less, and no two notes are separated by a perfect fourth.
            `,
        }}
    />
)

export default Component
