import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledButton from '../../../../../components/Styled/Button'
import StyledButtonText from '../../../../../components/Styled/ButtonText'
import { getMapIsSelectedOrTabbedPath } from '../../../../../redux/page/selector'
import './style'

const MenuButton = ({
    className,
    pagePath,
    children,
}) => {
    const isSelectedOrTabbedPath = useSelector(
        getMapIsSelectedOrTabbedPath(pagePath),
    )

    return (
        <StyledButton
            {...{
                className: cx(
                    'MenuButton',
                    'font__button',
                    className,
                ),
                pagePath,
                isSelected: isSelectedOrTabbedPath,
            }}
        >
            <StyledButtonText>
                {children}
            </StyledButtonText>
        </StyledButton>
    )
}

MenuButton.propTypes = {
    className: PropTypes.string,
    pagePath: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default MenuButton