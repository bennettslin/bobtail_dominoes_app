import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledButton from '../../../../../components/Styled/Button'
import StyledButtonText from '../../../../../components/Styled/ButtonText'
import { getMapIsSelectedOrTabbedPagePath } from '../../../../../redux/page/selector'
import { join } from '../../../../../utils/general'
import { getInitialChildPage } from '../../../../../utils/pages/path'

const MenuButton = ({
    className,
    topLevelPage,
    children,
}) => {
    const isSelected = useSelector(
        getMapIsSelectedOrTabbedPagePath(topLevelPage),
    )

    return (
        <StyledButton
            {...{
                className: cx(
                    'MenuButton',
                    'font__button',
                    'fontSize__lg',
                    className,
                ),
                pagePath: join([
                    topLevelPage,
                    getInitialChildPage(topLevelPage),
                ], '/'),
                isSelected,
            }}
        >
            <StyledButtonText {...{ isSelected }}>
                {children}
            </StyledButtonText>
        </StyledButton>
    )
}

MenuButton.propTypes = {
    className: PropTypes.string,
    topLevelPage: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default MenuButton
