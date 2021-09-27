import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledTabButton from '../../../../../components/Styled/TabButton'
import StyledButtonText from '../../../../../components/Styled/ButtonText'
import { getMapIsSelectedOrTopLevelTabbedPath } from '../../../../../redux/page/selector'
import { getPagePathFromConfig } from '../../../../../utils/pages/config'
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
        isSelectedOrTopLevelTabbedPath = useSelector(
            getMapIsSelectedOrTopLevelTabbedPath({
                pagePath,
                topLevelPage,
                isFirstPage,
            }),
        )

    return (
        <StyledTabButton
            {...{
                className: cx(
                    'TabbedMenuButton',
                    'font__button',
                ),
                pagePath,
                isSelected: isSelectedOrTopLevelTabbedPath,
            }}
        >
            <StyledButtonText>
                {children}
            </StyledButtonText>
        </StyledTabButton>
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
