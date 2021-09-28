import React from 'react'
import cx from 'classnames'
import Page from '../../containers/Page'
import Flex from '../../components/Flex'
import StyledParagraph from '../../components/Styled/Paragraph'
import DominoSvg from '../../components/Svgs/Domino'
import samplePerspective from '../../assets/svgs/rules/samplePerspective'
import './style'

const Component = () => (
    <Page>
        <Flex
            {...{
                className: cx(
                    'HomeFlex',
                ),
                flexGrow: 1,
            }}
        >
            <StyledParagraph>
            Whether playing by yourself or with friends, Bobtail Dominoes is a fun and challenging game for musicians of all skill levels!
            </StyledParagraph>
        </Flex>
        <DominoSvg
            {...{
                src: samplePerspective,
                scaleFactor: 3,
                isFigure: false,
            }}
        />
    </Page>
)

export default Component
