import React from 'react'
import Page from '../../containers/Page'
import PuzzleLinks from '../../components/PuzzleLinks'

const Component = () => (
    <Page
        {...{
            body: (
                <PuzzleLinks />
            ),
        }}
    />
)

export default Component
