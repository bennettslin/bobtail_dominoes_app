import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import {
    RULES_PAGE,
    CHORDS_PAGE,
    PUZZLES_PAGE,
    // LINKS_PAGE,
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
        <HeaderButton {...{ pagePath: RULES_PAGE }}>
            Rules
        </HeaderButton>
        <HeaderButton {...{ pagePath: CHORDS_PAGE }}>
            Chords
        </HeaderButton>
        <HeaderButton {...{ pagePath: PUZZLES_PAGE }}>
            Puzzles
        </HeaderButton>
        {/* <HeaderButton {...{ pagePath: LINKS_PAGE }}>
            Links
        </HeaderButton> */}
    </div>
)

export default Menu
