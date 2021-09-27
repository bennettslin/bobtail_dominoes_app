import React from 'react'
import cx from 'classnames'
import StyledFrame from '../../../components/Styled/Frame'
import HomeButton from './HomeButton'
import Menu from './Menu'
import './style'

const MainHeader = () => (
    <StyledFrame
        {...{
            className: cx(
                'MainHeader',
            ),
        }}
    >
        <HomeButton />
        <Menu />
    </StyledFrame>
)

export default MainHeader
