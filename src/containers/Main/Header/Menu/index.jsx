import React from 'react'
import cx from 'classnames'
import Flex from '../../../../components/Flex'
import HeaderButton from '../HeaderButton'
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
        <HeaderButton {...{ pagePath: ABOUT_PAGE }}>
            About
        </HeaderButton>
        <HeaderButton {...{ pagePath: RULES_PAGE }}>
            Rules
        </HeaderButton>
        <HeaderButton {...{ pagePath: CHORDS_PAGE }}>
            Chords
        </HeaderButton>
        <HeaderButton {...{ pagePath: PUZZLES_PAGE }}>
            Puzzles
        </HeaderButton>
    </Flex>
)

export default Menu
