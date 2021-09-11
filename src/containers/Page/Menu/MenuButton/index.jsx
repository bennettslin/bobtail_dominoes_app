import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../../components/Button'
import { getMapIsSelectedPage } from '../../../../redux/page/selector'
import './style'

const PageMenuButton = ({ pageLink, children }) => {
    const isSelectedPage = useSelector(getMapIsSelectedPage(pageLink))

    return (
        <Button
            {...{
                className: cx(
                    'PageMenuButton',
                    'font__heading',
                ),
                analyticsLabel: `PageMenuButton__${pageLink}`,
                pageLink,
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
    children: PropTypes.node.isRequired,
}

export default PageMenuButton
