import React from 'react'
import DominoSvg from '../../../components/Svgs/Domino'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/about'
import dominoesPlayingInvalid from '../../../assets/svgs/rules/dominoesPlayingInvalid'

const id = 'design'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            showContactEmail: true,
            titleHeading: 'Design specs',
            body: [
                `
Hang tight! As some of you might know, worldwide manufacturers are pretty backed up these days. We're still weighing our options for a manufacturing partner. On the plus side, this gives us time to finalize the design!
                `,
                (
                    <DominoSvg {...{ src: dominoesPlayingInvalid }} />
                ),
                `
If you have any feedback or suggestions for improvement on the current specs, we'd love to hear them.
                `,
            ],
        }}
    />
)

export default Component
