import React, { useContext } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../contexts/PageConfig'
import TabbedMenuButton from './MenuButton'
import { mapSelectedPagePath } from '../../../redux/page/selector'
import { getIsTabbedPath } from '../../../utils/pages/path'
import './style'

const TabbedMenu = () => {
    const
        { pages, topLevelPage } = useContext(PageConfigContext),
        selectedPagePath = useSelector(mapSelectedPagePath),
        isTabbedPage = getIsTabbedPath(selectedPagePath)

    return isTabbedPage && (
        Boolean(pages) && (
            <div
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
            </div>
        )
    )
}

export default TabbedMenu
