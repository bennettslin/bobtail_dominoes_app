import React from 'react'
import Page from '../../../../containers/Page'
import { getPageConfigForDate } from '../../../../utils/pages/puzzles'
import PAGES_DATES from '../../../../content/puzzles/2021'

const
    pathDate = PAGES_DATES[0],
    id = 'monday'

const Component = () => (
    <Page
        {...{
            ...getPageConfigForDate(pathDate, id),
            body: [
                `
Monday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
