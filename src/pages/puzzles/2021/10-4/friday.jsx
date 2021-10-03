import React from 'react'
import Page from '../../../../containers/Page'
import { getPageConfigForDate } from '../../../../content/puzzles'
import { PAGES_CONFIGS } from '../../../../content/puzzles/2021'

const
    pathDate = PAGES_CONFIGS[1].date,
    id = 'friday'

const Component = () => (
    <Page
        {...{
            ...getPageConfigForDate(pathDate, id),
            body: [
                `
Friday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
