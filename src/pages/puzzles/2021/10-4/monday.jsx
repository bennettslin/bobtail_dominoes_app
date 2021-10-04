import React from 'react'
import PuzzleSvg from '../../../../components/Svgs/Puzzle'
import Page from '../../../../containers/Page'
import PAGES_MAPS from '../../../../content/puzzles/2021'
import puzzle from '../../../../assets/svgs/puzzles/2021/10-4/monday/puzzle'
import answer from '../../../../assets/svgs/puzzles/2021/10-4/monday/answer'

const ID = 'monday'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAPS[1][ID],
            body: [
                `
Monday puzzle content.
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
