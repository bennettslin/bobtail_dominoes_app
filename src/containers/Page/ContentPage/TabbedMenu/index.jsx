import React, { useContext } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../contexts/PageConfig'
import StyledTabbedMenu from '../../../../components/Styled/TabbedMenu'
import BackLink from '../BackLink'
import TabbedMenuButtons from './Buttons'
import { getMapShowBackLink, mapShowTabbedMenu } from '../../../../redux/page/selector'

const TabbedMenu = () => {
    const
        { topLevelPage } = useContext(PageConfigContext),
        showTabbedMenu = useSelector(mapShowTabbedMenu),
        showBackLink = useSelector(getMapShowBackLink(topLevelPage))

    return showTabbedMenu && (
        <StyledTabbedMenu
            {...{
                className: cx(
                    'TabbedMenu',
                ),
            }}
        >
            {showBackLink && (
                <BackLink isStyledShadow />
            )}
            <TabbedMenuButtons />
        </StyledTabbedMenu>
    )
}

export default TabbedMenu
