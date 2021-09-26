import React from 'react'
import cx from 'classnames'
import HomePage from '../../containers/Page/HomePage'
import Paragraph from '../../components/Paragraph'
import DominoSvg from '../../components/Svgs/Domino'
import samplePerspective from '../../assets/svgs/rules/samplePerspective'

const Component = () => (
    <HomePage>
        <Paragraph
            {...{
                className: cx(
                    'text__light',
                ),
            }}
        >
            Whether playing by yourself or with friends, Bobtail Dominoes is a fun and challenging game for musicians of all skill levels!
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
