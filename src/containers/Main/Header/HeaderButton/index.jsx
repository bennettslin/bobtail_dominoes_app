import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../../components/Button'
import StyledButton from '../../../../components/Styled/Button'
import StyledButtonText from '../../../../components/Styled/ButtonText'
import { getMapIsSelectedOrTabbedPath } from '../../../../redux/page/selector'
import './style'

const HeaderButton = ({
    className,
    pagePath,
    isHomeButton,
    children,
}) => {
    const isSelectedOrTabbedPath = useSelector(
        getMapIsSelectedOrTabbedPath(pagePath),
    )

    return (
        <StyledButton>
            <Button
                {...{
                    className: cx(
                        'HeaderButton',
                        'font__button',
                        className,
                    ),
                    analyticsLabel: `HeaderButton__${pagePath}`,
                    pagePath,
                    isSelected: isSelectedOrTabbedPath,
                }}
            >
                {isHomeButton ? (
                    children
                ) : (
                    <StyledButtonText>
                        {children}
                    </StyledButtonText>
                )}
            </Button>
        </StyledButton>
    )
}

HeaderButton.propTypes = {
    className: PropTypes.string,
    pagePath: PropTypes.string.isRequired,
    isHomeButton: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default HeaderButton
