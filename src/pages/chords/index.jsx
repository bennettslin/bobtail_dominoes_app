import React from 'react'
import Page from '../../containers/Page'
import Body from '../../containers/Page/Body'
import content from '../../content/chords'

const Chords = () => (
    <Page>
        <Body {...content} />
    </Page>
)

export default Chords
