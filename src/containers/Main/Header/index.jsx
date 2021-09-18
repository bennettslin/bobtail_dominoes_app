import React from 'react'
import cx from 'classnames'
import StyledFrame from '../StyledFrame'
import HomeButton from './HomeButton'
import Menu from './Menu'
import './style'

const MainHeader = () => (
    <StyledFrame>
        <div
            {...{
                className: cx(
                    'MainHeader',
                ),
            }}
        >
            <HomeButton />
            <Menu />
        </div>
    </StyledFrame>
)

export default MainHeader
