import React from 'react'
import PuzzlePage from '../../../../containers/Pages/Puzzle'
import PAGES_MAPS from '../../../../content/puzzles/2021'
import puzzle from '../../../../assets/svgs/puzzles/2021/10-4/wednesday/puzzle'
import answer from '../../../../assets/svgs/puzzles/2021/10-4/wednesday/answer'

const ID = 'wednesday'

const Component = () => (
    <PuzzlePage
        {...{
            pageMap: PAGES_MAPS[1]?.[ID],
            content: `Wednesday puzzle content.`,
            puzzle,
            answer,
        }}
    />
)

export default Component