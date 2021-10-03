import React from 'react'
import Page from '../../../../containers/Page'
import PAGES_MAPS from '../../../../content/puzzles/2021'

const ID = 'wednesday'

console.log(PAGES_MAPS)

const Component = () => (
    <Page
        {...{
            ...PAGES_MAPS[0][ID],
            body: [
                `
Wednesday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
