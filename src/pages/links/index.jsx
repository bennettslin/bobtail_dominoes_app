import React from 'react'
import Page from '../../containers/Page'
import MarkdownBody from '../../containers/Page/MarkdownBody'
import content from '../../content/links'

const Links = () => (
    <Page>
        <MarkdownBody {...content} />
    </Page>
)

export default Links
