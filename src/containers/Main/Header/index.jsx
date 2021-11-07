import React, { useState } from 'react'
import cx from 'classnames'
import StyledFrame from '../../../components/Styled/Frame'
import StyledFrameBody from '../../../components/Styled/Frame/Body'
import HomeButton from './HomeButton'
import Menu from './Menu'
import './style'

const MainHeader = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    const onLoad = () => {
        setIsLoaded(true)
    }

    return (
        <StyledFrame
            {...{
                className: cx(
                    'hidden',
                    isLoaded && 'shown',
                ),
                order: 1,
            }}
        >
            <StyledFrameBody
                {...{
                    className: cx(
                        'MainHeader',
                    ),
                    justifyContent: 'spaceBetween',
                    gap: 'xs',
                }}
            >
                <HomeButton {...{ onLoad }} />
                <Menu />
            </StyledFrameBody>
        </StyledFrame>
    )
}

export default MainHeader
