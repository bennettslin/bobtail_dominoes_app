import React from 'react'
import HomePage from '../../containers/Page/HomePage'
import Paragraph from '../../components/Paragraph'
import DominoSvg from '../../components/Svgs/Domino'
import samplePerspective from '../../assets/svgs/rules/samplePerspective'

const Component = () => (
    <HomePage>
        <Paragraph>
            Home page placeholder content.
        </Paragraph>
        <DominoSvg
            {...{
                src: samplePerspective,
                scaleFactor: 3,
                isFigure: false,
            }}
        />
    </HomePage>
)

export default Component
