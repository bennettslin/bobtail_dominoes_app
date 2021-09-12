import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../../components/Button'
import { getMapIsSelectedPagePath } from '../../../../redux/page/selector'
import { getPathForChildPage } from '../../../../constants/pages'
import './style'

const PageMenuButton = ({ pagePath, topLevelPage, children }) => {
    const
        childPath = getPathForChildPage({
            topLevelPage,
            id: pagePath,
        }),
        isSelectedPagePath = useSelector(getMapIsSelectedPagePath(childPath))

    return (
        <Button
            {...{
                className: cx(
                    'PageMenuButton',
                    'font__heading',
                ),
                analyticsLabel: `PageMenuButton__${pagePath}`,
                pagePath: childPath,
                isSelected: isSelectedPagePath,
            }}
        >
            {children}
        </Button>
    )
}

PageMenuButton.propTypes = {
    className: PropTypes.string,
    pagePath: PropTypes.string.isRequired,
    topLevelPage: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default PageMenuButton
