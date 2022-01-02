import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledButtonText from '../../../../../components/Styled/ButtonText'
import StyledTabButton from '../../../../../components/Styled/TabButton'
import { getMapIsSelectedPagePath } from '../../../../../redux/page/selector'
import { getPagePathFromConfig } from '../../../../../utils/pages/path/config'
import { datePropTypes } from '../../../../../constants/propTypes'
import TabbedMenuEllipsis from './Ellipsis'

const TabbedMenuButton = ({
    id,
    date,
    topLevelPage,
    isEllipsis,
    children,
}) => {
    const
        pagePath = getPagePathFromConfig({ topLevelPage, id, date }),
        isSelected = useSelector(getMapIsSelectedPagePath(pagePath))

    return isEllipsis ? (
        <TabbedMenuEllipsis />
    ) : (
        <StyledTabButton
            {...{
                className: cx(
                    'TabbedMenuButton',
                    'font__button',
                    'fontSize__md',
                ),
                pagePath,
                isSelected,
            }}
        >
            <StyledButtonText {...{ isSelected }}>
                {children}
            </StyledButtonText>
        </StyledTabButton>
    )
}

TabbedMenuButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    date: datePropTypes,
    topLevelPage: PropTypes.string.isRequired,
    isEllipsis: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default TabbedMenuButton
