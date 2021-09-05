import React from 'react'
import Page from '../../../containers/Page'
import PuzzleBody from '../../../containers/Page/PuzzleBody'
import content, { title } from '../../../content/puzzles/2021/blah'

const Blah = () => (
    <Page {...{ content, title }}>
        <PuzzleBody
            {...{
                title,
                year: 2021,
                month: 7,
                day: 31,
            }}
        >
            {content}
        </PuzzleBody>
    </Page>
)
export default Blah
