import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../../components/Button'
import { getMapIsSelectedPage } from '../../../../redux/page/selector'
import { getPathForChildPage } from '../../../../constants/pages'
import './style'

const PageMenuButton = ({ pageLink, rootPage, children }) => {
    const
        childPath = getPathForChildPage({
            rootPage,
            id: pageLink,
        }),
        isSelectedPage = useSelector(getMapIsSelectedPage(childPath))

    return (
        <Button
            {...{
                className: cx(
                    'PageMenuButton',
                    'font__heading',
                ),
                analyticsLabel: `PageMenuButton__${pageLink}`,
                pageLink: childPath,
                isSelected: isSelectedPage,
            }}
        >
            {children}
        </Button>
    )
}

PageMenuButton.propTypes = {
    className: PropTypes.string,
    pageLink: PropTypes.string.isRequired,
    rootPage: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default PageMenuButton
