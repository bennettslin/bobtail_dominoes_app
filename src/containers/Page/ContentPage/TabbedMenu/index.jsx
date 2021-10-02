import React, { useContext } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../contexts/PageConfig'
import StyledTabbedMenu from '../../../../components/Styled/TabbedMenu'
import TabbedMenuButton from './Button'
import BackLink from '../BackLink'
import { getMapShowBackLink, getMapShowTabbedMenu } from '../../../../redux/page/selector'
import './style'

const TabbedMenu = () => {
    const
        { pages, topLevelPage } = useContext(PageConfigContext),
        showTabbedMenu = useSelector(getMapShowTabbedMenu(pages)),
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
                <BackLink isStyledText />
            )}
            {pages.map(({
                id,
                title,
                date,
            }, index) => (
                <TabbedMenuButton
                    {...{
                        key: index,
                        id,
                        date,
                        topLevelPage,
                    }}
                >
                    {title}
                </TabbedMenuButton>
            ))}
        </StyledTabbedMenu>
    )
}

export default TabbedMenu
