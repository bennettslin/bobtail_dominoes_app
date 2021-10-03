import React from 'react'
import DominoSvg from '../../components/Svgs/Domino'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/about'
import designSpecs from '../../assets/svgs/about/designSpecs'

const ID = 'design'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            showContactEmail: true,
            titleHeading: 'Design specs',
            body: [
                `
Hang tight! Manufacturers worldwide are backed up right now, so we're still weighing our options for a manufacturing partner. In the meantime, if you have feedback or suggestions for improvement on the current specs, we'd love to hear them!
                `,
                (
                    <DominoSvg {...{ src: designSpecs }} />
                ),
            ],
        }}
    />
)

export default Component
