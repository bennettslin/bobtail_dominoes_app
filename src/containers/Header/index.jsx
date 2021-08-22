import React from 'react'
import cx from 'classnames'
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
        <Menu />
    </div>
)

export default Header
