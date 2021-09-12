import React from 'react'
import Page from '../../containers/Page'
import { getMarkdownLinksForRootPage } from '../../utils/format/markdown'
import { pagesList } from '../../content/puzzles'
import { PUZZLES_PAGE } from '../../constants/pages'

const Component = () => (
    <Page
        {...{
            body: getMarkdownLinksForRootPage({
                topLevelPage: PUZZLES_PAGE,
                pagesList,
            }),
        }}
    />
)

export default Component
