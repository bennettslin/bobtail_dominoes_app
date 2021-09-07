import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import {
    RULES_PAGE,
    CHORDS_PAGE,
    PUZZLES_PAGE,
    LINKS_PAGE,
} from '../../../constants/pages'
import './style'

const Menu = () => (
    <div
        {...{
            className: cx(
                'Menu',
            ),
        }}
    >
        <HeaderButton {...{ pageLink: RULES_PAGE }}>
            Rules
        </HeaderButton>
        <HeaderButton {...{ pageLink: CHORDS_PAGE }}>
            Chords
        </HeaderButton>
        <HeaderButton {...{ pageLink: PUZZLES_PAGE }}>
            Puzzles
        </HeaderButton>
        <HeaderButton {...{ pageLink: LINKS_PAGE }}>
            Links
        </HeaderButton>
    </div>
)

export default Menu
