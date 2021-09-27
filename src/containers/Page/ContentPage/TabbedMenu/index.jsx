import React, { useContext } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../contexts/PageConfig'
import TabbedMenuButton from './Button'
import { mapSelectedPagePath } from '../../../../redux/page/selector'
import { getIsTabbedPath } from '../../../../utils/pages/path'
import './style'
import StyledTabbedMenu from '../../../../components/Styled/TabbedMenu'

const TabbedMenu = () => {
    const
        { pages, topLevelPage } = useContext(PageConfigContext),
        selectedPagePath = useSelector(mapSelectedPagePath),
        isTabbedPage = getIsTabbedPath(selectedPagePath)

    return isTabbedPage && Boolean(pages) && (
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
