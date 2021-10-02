import React, { useContext } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../contexts/PageConfig'
import StyledTabbedMenu from '../../../../components/Styled/TabbedMenu'
import TabbedMenuButton from './Button'
import { getMapShowTabbedMenu } from '../../../../redux/page/selector'
import './style'

const TabbedMenu = () => {
    const
        { pages, topLevelPage } = useContext(PageConfigContext),
        showTabbedMenu = useSelector(getMapShowTabbedMenu(pages))

    return showTabbedMenu && (
        <StyledTabbedMenu
            {...{
                className: cx(
                    'TabbedMenu',
                ),
            }}
        >
            {pages.map(({
                id,
                title,
                date,
            }, index) => (
                <TabbedMenuButton
                    {...{
                        key: id,
                        id,
                        date,
                        topLevelPage,
                        isFirstPage: !index,
                    }}
                >
                    {title}
                </TabbedMenuButton>
            ))}
        </StyledTabbedMenu>
    )
}

export default TabbedMenu
