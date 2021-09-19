import React from 'react'
import Page from '../../containers/Page'
import DominoSvg from '../../components/Svgs/Domino'
import Flex from '../../components/Flex'
import samplePerspective from '../../assets/svgs/rules/samplePerspective'

const Component = () => (
    <Page>
        <Flex>
            <DominoSvg
                {...{
                    src: samplePerspective,
                    scaleFactor: 3,
                }}
            />
        </Flex>
    </Page>
)

export default Component
