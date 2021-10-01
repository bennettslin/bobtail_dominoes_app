import React from 'react'
import cx from 'classnames'
import Page from '../../containers/Page'
import Flex from '../../components/Flex'
import StyledParagraph from '../../components/Styled/Paragraph'
import DominoSvg from '../../components/Svgs/Domino'
import homeDominoes from '../../assets/svgs/home/homeDominoes'
import { getSmartQuotedText } from '../../utils/format/smartQuote'
import './style'

const Component = () => (
    <Page>
        <Flex
            {...{
                className: cx(
                    'HomePage',
                ),
                flexDirection: 'column-reverse',
                flexGrow: 1,
            }}
        >
            <DominoSvg
                {...{
                    className: 'homeDominoes',
                    src: homeDominoes,
                    scaleFactor: 3,
                    isFigure: false,
                }}
            />
            <Flex
                {...{
                    className: cx(
                        'HomeFlex',
                    ),
                    flexGrow: 1,
                }}
            >
                <StyledParagraph>
                    {getSmartQuotedText(`Bobtail Dominoes is the ultimate chord-building game for musicians of all skill levels. Challenge yourself or have fun with friends!`)}
                </StyledParagraph>
            </Flex>
        </Flex>
    </Page>
)

export default Component
