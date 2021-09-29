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
            {/* Whether playing by yourself or with friends, Bobtail Dominoes is a fun and challenging game that will help you grow as a musician. I can make that promise with confidence, because I know it's helped me! */}
        </Flex>
        <DominoSvg
            {...{
                className: 'homeDominoes',
                src: homeDominoes,
                scaleFactor: 3,
                isFigure: false,
            }}
        />
    </Page>
)

export default Component
