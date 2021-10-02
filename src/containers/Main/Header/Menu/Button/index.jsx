import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledButton from '../../../../../components/Styled/Button'
import StyledButtonText from '../../../../../components/Styled/ButtonText'
import { getMapIsSelectedPagePath } from '../../../../../redux/page/selector'
import { getFilteredAndJoinedList } from '../../../../../utils/format'

const MenuButton = ({
    className,
    pagePath,
    initialChildPath,
    children,
}) => {
    const showSelectedPath = useSelector(getMapIsSelectedPagePath(pagePath))

    return (
        <StyledButton
            {...{
                className: cx(
                    'MenuButton',
                    'font__button',
                    'fontSize__lg',
                    className,
                ),
                pagePath: getFilteredAndJoinedList([pagePath, initialChildPath], '/'),
                isSelected: showSelectedPath,
            }}
        >
            <StyledButtonText {...{ isSelected: showSelectedPath }}>
                {children}
            </StyledButtonText>
        </StyledButton>
    )
}

MenuButton.propTypes = {
    className: PropTypes.string,
    pagePath: PropTypes.string.isRequired,
    initialChildPath: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default MenuButton
