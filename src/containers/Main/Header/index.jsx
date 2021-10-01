import React from 'react'
import cx from 'classnames'
import StyledFrame from '../../../components/Styled/Frame'
import StyledFrameBody from '../../../components/Styled/Frame/Body'
import HomeButton from './HomeButton'
import Menu from './Menu'
import './style'

const MainHeader = () => (
    <StyledFrame>
        <StyledFrameBody
            {...{
                className: cx(
                    'MainHeader',
                ),
            }}
        >
            <HomeButton />
            <Menu />
        </StyledFrameBody>
    </StyledFrame>
)

export default MainHeader
