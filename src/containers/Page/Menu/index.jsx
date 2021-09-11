import React from 'react'
import cx from 'classnames'
import PageMenuButton from './MenuButton'
import {
    RULES_PAGE,
    CHORDS_PAGE,
    PUZZLES_PAGE,
    LINKS_PAGE,
} from '../../../constants/pages'
import './style'

const PageMenu = () => (
    <div
        {...{
            className: cx(
                'PageMenu',
            ),
        }}
    >
        <PageMenuButton {...{ pageLink: RULES_PAGE }}>
            Rules
        </PageMenuButton>
        <PageMenuButton {...{ pageLink: CHORDS_PAGE }}>
            Chords
        </PageMenuButton>
        <PageMenuButton {...{ pageLink: PUZZLES_PAGE }}>
            Puzzles
        </PageMenuButton>
        <PageMenuButton {...{ pageLink: LINKS_PAGE }}>
            Links
        </PageMenuButton>
    </div>
)

export default PageMenu
