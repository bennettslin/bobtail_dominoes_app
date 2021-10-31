import React, { useState } from 'react'
import cx from 'classnames'
import StyledFrame from '../../../components/Styled/Frame'
import StyledFrameBody from '../../../components/Styled/Frame/Body'
import HomeButton from './HomeButton'
import Menu from './Menu'
import './style'
import { useSelector } from 'react-redux'
import { mapIsFullPage } from '../../../redux/page/selector'

const MainHeader = () => {
    const isFullPage = useSelector(mapIsFullPage)
    const [isLoaded, setIsLoaded] = useState(false)

    const onLoad = () => {
        setIsLoaded(true)
    }

    return !isFullPage && (
        <StyledFrame
            {...{
                className: cx(
                    'hidden',
                    isLoaded && 'shown',
                ),
            }}
        >
            <StyledFrameBody
                {...{
                    className: cx(
                        'MainHeader',
                    ),
                    justifyContent: 'space-between',
                }}
            >
                <HomeButton {...{ onLoad }} />
                <Menu />
            </StyledFrameBody>
        </StyledFrame>
    )
}

export default MainHeader
