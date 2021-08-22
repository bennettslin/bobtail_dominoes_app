import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import { HOME_PAGE } from '../../../constants/pages'
import './style'

const Menu = () => (
    <div
        {...{
            className: cx(
                'Menu',
            ),
        }}
    >
        <HeaderButton {...{ pageLink: HOME_PAGE }}>
            Bobtail Dominoes
        </HeaderButton>
    </div>
)

export default Menu
