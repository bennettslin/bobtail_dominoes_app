import React from 'react'
import cx from 'classnames'
import Page from '../../containers/Page'
import Flex from '../../components/Flex'
import StyledParagraph from '../../components/Styled/Paragraph'
import DominoSvg from '../../components/Svgs/Domino'
import homeDominoes from '../../assets/svgs/home/homeDominoes'
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
            A fun and challenging game for musicians of all skill levels!
            </StyledParagraph>
        </Flex>
        <DominoSvg
            {...{
                src: homeDominoes,
                className: cx(
                    'homeDominoes',
                ),
                scaleFactor: 3,
                isFigure: false,
            }}
        />
    </Page>
)

export default Component
