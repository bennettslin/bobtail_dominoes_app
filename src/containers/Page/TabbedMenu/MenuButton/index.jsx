import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../../components/Button'
import { getMapIsSelectedPagePath } from '../../../../redux/page/selector'
import { getPagePathFromConfig } from '../../../../utils/pages/config'
import './style'

const TabbedMenuButton = ({
    topLevelPage,
    id,
    date,
    children,
}) => {
    const
        childPath = getPagePathFromConfig({
            topLevelPage,
            id,
            date,
        }),
        isSelectedPagePath = useSelector(getMapIsSelectedPagePath(childPath))

    return (
        <Button
            {...{
                className: cx(
                    'TabbedMenuButton',
                    'font__heading',
                ),
                analyticsLabel: `TabbedMenuButton__${id}`,
                pagePath: childPath,
                isSelected: isSelectedPagePath,
            }}
        >
            {children}
        </Button>
    )
}

TabbedMenuButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    topLevelPage: PropTypes.string.isRequired,
    date: PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
    }),
    children: PropTypes.node.isRequired,
}

export default TabbedMenuButton
