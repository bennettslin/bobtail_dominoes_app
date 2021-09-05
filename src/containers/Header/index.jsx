import React from 'react'
import cx from 'classnames'
import HomeButton from './HomeButton'
import Menu from './Menu'
import './style'

const Header = () => (
    <div
        {...{
            className: cx(
                'Header',
            ),
        }}
    >
        <HomeButton />
        <Menu />
    </div>
)

export default Header
