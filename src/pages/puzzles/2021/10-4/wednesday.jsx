import React from 'react'
import PuzzleSvg from '../../../../components/Svgs/Puzzle'
import Page from '../../../../containers/Page'
import PAGES_MAPS from '../../../../content/puzzles/2021'
import puzzle from '../../../../assets/svgs/puzzles/2021/10-4/wednesday/puzzle'
import answer from '../../../../assets/svgs/puzzles/2021/10-4/wednesday/answer'

const ID = 'wednesday'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAPS[1][ID],
            body: [
                `
Wednesday puzzle content.
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
