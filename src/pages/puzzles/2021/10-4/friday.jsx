import React from 'react'
import Page from '../../../../containers/Page'
import PAGES_MAPS from '../../../../content/puzzles/2021'

const ID = 'friday'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAPS[1][ID],
            body: [
                `
Friday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
