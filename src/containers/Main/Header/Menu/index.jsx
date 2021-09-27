import React from 'react'
import cx from 'classnames'
import Flex from '../../../../components/Flex'
import MenuButton from './Button'
import {
    ABOUT_PAGE,
    RULES_PAGE,
    CHORDS_PAGE,
    PUZZLES_PAGE,
} from '../../../../constants/pages'
import './style'

const Menu = () => (
    <Flex
        {...{
            className: cx(
                'Menu',
            ),
            flexWrap: 'wrap',
        }}
    >
        <MenuButton {...{ pagePath: ABOUT_PAGE }}>
            About
        </MenuButton>
        <MenuButton {...{ pagePath: RULES_PAGE }}>
            Rules
        </MenuButton>
        <MenuButton {...{ pagePath: CHORDS_PAGE }}>
            Chords
        </MenuButton>
        <MenuButton {...{ pagePath: PUZZLES_PAGE }}>
            Puzzles
        </MenuButton>
    </Flex>
)

export default Menu
