import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../components/Button'
import {
    getMapIsSelectedPage,
    getMapIsSelectedTabbedPage,
} from '../../../redux/page/selector'
import './style'

const HeaderButton = ({ className, pageLink, children }) => {
    const
        isSelectedPage = useSelector(getMapIsSelectedPage(pageLink)),
        isSelectedTabbedPage = useSelector(getMapIsSelectedTabbedPage(pageLink))

    return (
        <Button
            {...{
                className: cx(
                    'HeaderButton',
                    'font__heading',
                    className,
                ),
                analyticsLabel: `HeaderButton__${pageLink}`,
                pageLink,
                isSelected: isSelectedPage || isSelectedTabbedPage,
            }}
        >
            {children}
        </Button>
    )
}

HeaderButton.propTypes = {
    className: PropTypes.string,
    pageLink: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default HeaderButton
