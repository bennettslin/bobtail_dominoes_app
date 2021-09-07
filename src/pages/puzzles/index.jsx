import React from 'react'
import Page from '../../containers/Page'
import Body from '../../containers/Page/Body'
import Puzzles2021 from './2021'

const Puzzles = () => (
    <Page>
        <Body {...{ title: 'Weekly puzzles' }}>
            <Puzzles2021 />
        </Body>
    </Page>
)
export default Puzzles
