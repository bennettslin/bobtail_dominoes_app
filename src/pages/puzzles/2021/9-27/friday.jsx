import React from 'react'
import PuzzleSvg from '../../../../components/Svgs/Puzzle'
import Page from '../../../../containers/Page'
import PAGES_MAPS from '../../../../content/puzzles/2021'
import puzzle from '../../../../assets/svgs/puzzles/2021/9-27/friday/puzzle'
import answer from '../../../../assets/svgs/puzzles/2021/9-27/friday/answer'

const ID = 'friday'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAPS[0][ID],
            body: [
                `
Friday puzzle content.
                `,
                (
                    <PuzzleSvg
                        {...{
                            puzzle,
                            answer,
                        }}
                    />
                ),
            ],
        }}
    />
)

export default Component
