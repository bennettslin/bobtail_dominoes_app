import React, { useState } from 'react'
import cx from 'classnames'
import Flex from '../../components/Flex'
import StyledParagraph from '../../components/Styled/Paragraph'
import DominoesSvg from '../../components/Svgs/Dominoes'
import Page from '../../containers/Page'
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
                    flexDirection: 'columnReverse',
                    justifyContent: 'spaceEvenly',
                    flexGrow: 1,
                    gap: 'sm',
                }}
            >
                <DominoesSvg
                    {...{
                        className: 'homeDominoes',
                        src: homeDominoes,
                        scaleFactor: 1.75,
                        isFigure: false,
                        onLoad,
                    }}
                />
                <Flex {...{ className: cx('HomeFlex') }} >
                    <StyledParagraph {...{ fontSize: 'md' }}>
                        Bobtail Dominoes is the ultimate chord-building game for musicians of all skill levels. Challenge yourself or have fun playing with friends!
                    </StyledParagraph>
                </Flex>
            </Flex>
        </Page>
    )
}

export default Component
