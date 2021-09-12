import React, { useContext } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../contexts/PageConfig'
import PageMenuButton from './MenuButton'
import { mapSelectedPagePath } from '../../../redux/page/selector'
import './style'
import { getIsTabbedPageFromPath } from '../../../utils/pages/path'

const TabbedMenu = () => {
    const
        { pages, topLevelPage } = useContext(PageConfigContext),
        selectedPagePath = useSelector(mapSelectedPagePath),
        isTabbedPage = getIsTabbedPageFromPath(selectedPagePath)

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
                }) => (
                    <PageMenuButton
                        {...{
                            key: id,
                            id,
                            date,
                            topLevelPage,
                        }}
                    >
                        {title}
                    </PageMenuButton>
                ))}
            </div>
        )
    )
}

export default TabbedMenu
