import React from 'react'
import cx from 'classnames'
import Flex from '../../../../components/Flex'
import MenuButton from './Button'
import {
    ABOUT_PAGE,
    RULES_PAGE,
    GUIDES_PAGE,
    DEMO_PAGE,
} from '../../../../constants/pages'
import './style'

const Menu = () => (
    <Flex
        {...{
            className: cx(
                'Menu',
            ),
            flexWrap: 'wrap',
            columnGap: { default: 'sm', xs: 'md' },
        }}
    >
        <MenuButton {...{ topLevelPage: ABOUT_PAGE }} />
        <MenuButton {...{ topLevelPage: RULES_PAGE }} />
        <MenuButton {...{ topLevelPage: GUIDES_PAGE }} />
        <MenuButton {...{ topLevelPage: DEMO_PAGE }} />
    </Flex>
)

export default Menu
