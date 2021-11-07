import React from 'react'
import cx from 'classnames'
import Flex from '../../../../components/Flex'
import MenuButton from './Button'
import { getCapitalizedText } from '../../../../utils/format'
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
        <MenuButton {...{ topLevelPage: ABOUT_PAGE }}>
            {getCapitalizedText(ABOUT_PAGE)}
        </MenuButton>
        <MenuButton {...{ topLevelPage: RULES_PAGE }}>
            {getCapitalizedText(RULES_PAGE)}
        </MenuButton>
        <MenuButton {...{ topLevelPage: GUIDES_PAGE }}>
            {getCapitalizedText(GUIDES_PAGE)}
        </MenuButton>
        <MenuButton {...{ topLevelPage: DEMO_PAGE }}>
            {getCapitalizedText(DEMO_PAGE)}
        </MenuButton>
    </Flex>
)

export default Menu
