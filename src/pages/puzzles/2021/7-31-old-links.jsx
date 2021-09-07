import React from 'react'
import content from '../../../content/puzzles/2021/7-31'
import Page from '../../../containers/Page'
import MarkdownBody from '../../../containers/Page/MarkdownBody'
import MultiPageFooter from '../../../components/MultiPageFooter'
import { PUZZLES_PAGE } from '../../../constants/pages'

const Puzzle210731 = () => (
    <Page>
        <MarkdownBody {...content} />
        <MultiPageFooter {...{ backPage: PUZZLES_PAGE }} />
    </Page>
)

export default Puzzle210731
