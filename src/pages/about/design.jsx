import React from 'react'
import DominoesSvg from '../../components/Svgs/Dominoes'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/about'
import designSpecs from '../../assets/svgs/about/designSpecs'

const ID = 'design'
const TITLE = 'Design specs'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            showContactEmail: true,
            titleHeading: TITLE,
            metaTitle: TITLE,
            metaDescription: `Current specs for the game pieces.`,
            body: [
                `
Hang tight! Manufacturers worldwide are backed up right now, so we're still weighing our options for a manufacturing partner. In the meantime, if you have feedback or suggestions for improvement on the current specs, we'd love to hear them!
                `,
                (
                    <DominoesSvg {...{ src: designSpecs }} />
                ),
            ],
        }}
    />
)

export default Component
