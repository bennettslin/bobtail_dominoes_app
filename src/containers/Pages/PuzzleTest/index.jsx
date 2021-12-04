import React from 'react'
import Page from '../../Page'
import NotFoundPage from '../NotFound'
import PuzzleTest from '../../../components/PuzzleTest'

const PuzzleTestPage = () => (
    IS_RUNTIME ? (
        <Page
            {...{
                id: 'puzzleTest',
                titleHeading: 'Puzzle test page',
                body: (
                    <PuzzleTest />
                ),
            }}
        />
    ) : (
        <NotFoundPage />
    )
)

export default PuzzleTestPage
