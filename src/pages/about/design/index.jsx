import React from 'react'
import DominoSvg from '../../../components/Svgs/Domino'
import Page from '../../../containers/Page'
import { getPageConfigForId } from '../../../utils/pages/about'
import designSpecs from '../../../assets/svgs/about/designSpecs'

const id = 'design'

const Component = () => (
    <Page
        {...{
            ...getPageConfigForId(id),
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
