import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledTabbedMenu from '../../../../components/Styled/TabbedMenu'
import BackLink from '../BackLink'
import TabbedMenuButtons from './Buttons'
import { mapShowTabbedMenu } from '../../../../redux/page/selector'

const TabbedMenu = () => {
    const showTabbedMenu = useSelector(mapShowTabbedMenu)

    return showTabbedMenu && (
        <StyledTabbedMenu
            {...{
                className: cx(
                    'TabbedMenu',
                ),
            }}
        >
            <BackLink isStyledShadow />
            <TabbedMenuButtons />
        </StyledTabbedMenu>
    )
}

export default TabbedMenu
