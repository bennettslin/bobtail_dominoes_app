import React from 'react'
import PuzzlePage from '../../../../containers/Pages/Puzzle'
import PAGES_MAPS from '../../../../content/puzzles/2021'
import puzzle from '../../../../assets/svgs/puzzles/2021/10-4/friday/puzzle'
import answer from '../../../../assets/svgs/puzzles/2021/10-4/friday/answer'

const ID = 'friday'

const Component = () => (
    <PuzzlePage
        {...{
            pageMap: PAGES_MAPS[1]?.[ID],
            content: `Friday puzzle content.`,
            puzzle,
            answer,
        }}
    />
)

export default Component
