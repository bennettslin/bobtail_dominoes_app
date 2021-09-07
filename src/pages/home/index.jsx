import React from 'react'
import Page from '../../containers/Page'
import MarkdownBody from '../../containers/Page/MarkdownBody'
import content from '../../content/home'

const Home = () => (
    <Page>
        <MarkdownBody {...content} />
    </Page>
)

export default Home
