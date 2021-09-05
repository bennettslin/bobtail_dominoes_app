import React from 'react'
import Page from '../../../containers/Page'
import PuzzleBody from '../../../containers/Page/PuzzleBody'
import content, { title } from '../../../content/puzzles/2021/blah-again'

const BlahAgain = () => (
    <Page {...{ content, title }}>
        <PuzzleBody
            {...{
                title,
                year: 2021,
                month: 8,
                day: 22,
            }}
        >
            {content}
        </PuzzleBody>
    </Page>
)
export default BlahAgain
