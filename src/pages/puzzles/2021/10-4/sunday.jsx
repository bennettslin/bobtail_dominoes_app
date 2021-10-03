import React from 'react'
import Page from '../../../../containers/Page'
import { getPageConfigForDate } from '../../../../utils/pages/puzzles'
import PAGES_DATES from '../../../../content/puzzles/2021'

const
    pathDate = PAGES_DATES[1],
    id = 'sunday'

const Component = () => (
    <Page
        {...{
            ...getPageConfigForDate(pathDate, id),
            body: [
                `
Sunday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
