import React from 'react'
import Page from '../../../../containers/Page'
import { getPageConfigForDate } from '../../../../utils/pages/puzzles'
import PAGES_DATES from '../../../../content/puzzles/2021'

const
    PATH_DATE = PAGES_DATES[1],
    ID = 'friday'

const Component = () => (
    <Page
        {...{
            ...getPageConfigForDate(PATH_DATE, ID),
            body: [
                `
Friday puzzle content.
                `,
            ],
        }}
    />
)

export default Component
