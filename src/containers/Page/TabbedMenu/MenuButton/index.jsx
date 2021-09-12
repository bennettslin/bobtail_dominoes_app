import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../../components/Button'
import { getMapIsSelectedPagePath, mapSelectedPagePath } from '../../../../redux/page/selector'
import { getPagePathFromConfig } from '../../../../utils/pages/config'
import './style'

const TabbedMenuButton = ({
    id,
    date,
    topLevelPage,
    isFirstPage,
    children,
}) => {
    const
        pagePath = getPagePathFromConfig({
            topLevelPage,
            id,
            date,
        }),
        selectedPagePath = useSelector(mapSelectedPagePath),
        isSelectedPagePath = useSelector(getMapIsSelectedPagePath(pagePath)),
        isTopLevelTabbedPath = isFirstPage && selectedPagePath === topLevelPage

    return (
        <Button
            {...{
                className: cx(
                    'TabbedMenuButton',
                    'font__heading',
                ),
                analyticsLabel: `TabbedMenuButton__${id}`,
                pagePath,
                isSelected: isSelectedPagePath || isTopLevelTabbedPath,
            }}
        >
            {children}
        </Button>
    )
}

TabbedMenuButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    date: PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
    }),
    topLevelPage: PropTypes.string.isRequired,
    isFirstPage: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default TabbedMenuButton
