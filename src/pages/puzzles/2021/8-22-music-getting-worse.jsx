import React from 'react'
import content from '../../../content/puzzles/2021/8-22'
import Page from '../../../containers/Page'
import Body from '../../../containers/Page/Body'
import MultiPageFooter from '../../../components/MultiPageFooter'
import { PUZZLES_PAGE } from '../../../constants/pages'

const Puzzle210822 = () => (
    <Page>
        <Body {...content} />
        <MultiPageFooter {...{ backPage: PUZZLES_PAGE }} />
    </Page>
)

export default Puzzle210822
