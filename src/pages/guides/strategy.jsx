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
- Any three notes make up a triad if every interval between two consecutive notes is a minor third or greater.
- Any four notes make up a seventh chord if no interval between two consecutive note is a perfect fourth or greater, and only one at most is a whole tone or less.
            `,
        }}
    />
)

export default Component
