import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledButtonText from '../../../../../components/Styled/ButtonText'
import StyledTabButton from '../../../../../components/Styled/TabButton'
import { getMapIsSelectedOrTabbedPagePath } from '../../../../../redux/page/selector'
import { getPagePathFromConfig } from '../../../../../utils/pages/path'

const TabbedMenuButton = ({
    id,
    topLevelPage,
    children,
}) => {
    const
        pagePath = getPagePathFromConfig({ topLevelPage, id }),
        isSelected = useSelector(getMapIsSelectedOrTabbedPagePath(pagePath))

    return (
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
    topLevelPage: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default TabbedMenuButton
