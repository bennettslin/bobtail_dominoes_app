import React from 'react'
import ChordChecker from '../../components/ChordChecker'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/chords'

const ID = 'checker'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            body: (
                <ChordChecker />
            ),
        }}
    />
)

export default Component
