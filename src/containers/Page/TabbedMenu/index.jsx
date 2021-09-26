import React, { useContext } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../contexts/PageConfig'
import Flex from '../../../components/Flex'
import TabbedMenuButton from './MenuButton'
import { mapSelectedPagePath } from '../../../redux/page/selector'
import { getIsTabbedPath } from '../../../utils/pages/path'
import './style'

const TabbedMenu = () => {
    const
        { pages, topLevelPage } = useContext(PageConfigContext),
        selectedPagePath = useSelector(mapSelectedPagePath),
        isTabbedPage = getIsTabbedPath(selectedPagePath)

    return isTabbedPage && Boolean(pages) && (
        <Flex
            {...{
                className: cx(
                    'TabbedMenu',
                ),
                justifyContent: 'flex-start',
            }}
        >
            <div {...{ className: 'TabbedMenu__gutter' }} />
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
        </Flex>
    )
}

export default TabbedMenu
