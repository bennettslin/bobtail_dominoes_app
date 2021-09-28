import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledButton from '../../../../../components/Styled/Button'
import StyledButtonText from '../../../../../components/Styled/ButtonText'
import { getMapIsSelectedOrTabbedPath } from '../../../../../redux/page/selector'

const MenuButton = ({
    className,
    pagePath,
    children,
}) => {
    const isSelected = useSelector(getMapIsSelectedOrTabbedPath(pagePath))

    return (
        <StyledButton
            {...{
                className: cx(
                    'MenuButton',
                    'font__button',
                    'fontSize__lg',
                    className,
                ),
                pagePath,
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
    pagePath: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default MenuButton
