import React, { useState } from 'react'
import cx from 'classnames'
import Page from '../../containers/Page'
import Flex from '../../components/Flex'
import StyledParagraph from '../../components/Styled/Paragraph'
import DominoSvg from '../../components/Svgs/Domino'
import homeDominoes from '../../assets/svgs/home/homeDominoes'
import './style'

const Component = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    const onLoad = () => {
        setIsLoaded(true)
    }

    return (
        <Page
            {...{
                className: cx(
                    'hidden',
                    isLoaded && 'shown',
                ),
            }}
        >
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
                        onLoad,
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
                        Bobtail Dominoes is the ultimate chord-building game for musicians of all skill levels. Challenge yourself or have fun playing with friends!
                    </StyledParagraph>
                </Flex>
            </Flex>
        </Page>
    )
}

export default Component
