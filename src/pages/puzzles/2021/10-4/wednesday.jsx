import React from 'react'
import Page from '../../../../containers/Page'
import { getPageConfigForDate } from '../../../../utils/pages/puzzles'
import PAGES_DATES from '../../../../content/puzzles/2021'

const
    pathDate = PAGES_DATES[1],
    id = 'wednesday'

const Component = () => (
    <Page
        {...{
            ...getPageConfigForDate(pathDate, id),
            body: [
                `
Wednesday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
