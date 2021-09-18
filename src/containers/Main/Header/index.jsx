import React from 'react'
import cx from 'classnames'
import HomeButton from './HomeButton'
import Menu from './Menu'
import './style'

const MainHeader = () => (
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
)

export default MainHeader
