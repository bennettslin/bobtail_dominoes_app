import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../components/Button'
import {
    getMapIsSelectedPagePath,
    getMapIsSelectedTabbedPath,
} from '../../../redux/page/selector'
import './style'

const HeaderButton = ({ className, pagePath, children }) => {
    const
        isSelectedPagePath = useSelector(getMapIsSelectedPagePath(pagePath)),
        isSelectedTabbedPath = useSelector(getMapIsSelectedTabbedPath(pagePath))

    return (
        <Button
            {...{
                className: cx(
                    'HeaderButton',
                    'font__heading',
                    className,
                ),
                analyticsLabel: `HeaderButton__${pagePath}`,
                pagePath,
                isSelected: isSelectedPagePath || isSelectedTabbedPath,
            }}
        >
            {children}
        </Button>
    )
}

HeaderButton.propTypes = {
    className: PropTypes.string,
    pagePath: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default HeaderButton
