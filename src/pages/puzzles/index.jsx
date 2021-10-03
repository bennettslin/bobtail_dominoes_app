import React from 'react'
import Page from '../../containers/Page'
import { getMarkdownLinksForRootPage } from '../../utils/format/markdown'
import PAGES_LIST from '../../content/puzzles'
import { PUZZLES_PAGE } from '../../constants/pages'

const Component = () => (
    <Page
        {...{
            body: getMarkdownLinksForRootPage({
                topLevelPage: PUZZLES_PAGE,
                pagesList: PAGES_LIST,
            }),
        }}
    />
)

export default Component
