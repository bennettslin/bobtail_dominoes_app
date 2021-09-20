import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/about'

const id = 'story'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'Our story',
            body: `
Hi, I'm Bennett, singer of the Bobtail Yearlings! Sometime back, I came up with an exercise to improve my songwriting skills. Hand draw pitches in a hexagonal grid. I would challenge myself by coming up with little puzzles.

I gradually realized that my exercise might work as a tabletop game. I bought a bunch of bathroom tiles, cemented them together, and play tested with some musician friends.

I'm here to help you up your game as a musician.
            `,
        }}
    />
)

export default Component
