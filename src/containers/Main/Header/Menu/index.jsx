import React from 'react'
import cx from 'classnames'
import Flex from '../../../../components/Flex'
import MenuButton from './Button'
import {
    ABOUT_PAGE,
    RULES_PAGE,
    CHORDS_PAGE,
    DEMO_PAGE,
    // PUZZLES_PAGE,
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
        <MenuButton {...{ topLevelPage: ABOUT_PAGE }}>
            About
        </MenuButton>
        <MenuButton {...{ topLevelPage: RULES_PAGE }}>
            Rules
        </MenuButton>
        <MenuButton {...{ topLevelPage: CHORDS_PAGE }}>
            Chords
        </MenuButton>
        <MenuButton {...{ topLevelPage: DEMO_PAGE }}>
            Demo
        </MenuButton>
        {/* <MenuButton {...{ topLevelPage: PUZZLES_PAGE }}>
            Puzzles
        </MenuButton> */}
    </Flex>
)

export default Menu
