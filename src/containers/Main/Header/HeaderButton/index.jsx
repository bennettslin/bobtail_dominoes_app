import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../../components/Button'
import StyledButtonText from '../../../../components/Styled/ButtonText'
import {
    getMapIsSelectedPagePath,
    getMapIsSelectedTabbedPath,
} from '../../../../redux/page/selector'
import './style'

const HeaderButton = ({
    className,
    pagePath,
    isHomeButton,
    children,
}) => {
    const
        isSelectedPagePath = useSelector(getMapIsSelectedPagePath(pagePath)),
        isSelectedTabbedPath = useSelector(getMapIsSelectedTabbedPath(pagePath)),
        isSelected = isSelectedPagePath || isSelectedTabbedPath

    return (
        <Button
            {...{
                className: cx(
                    'HeaderButton',
                    'font__button',
                    className,
                ),
                analyticsLabel: `HeaderButton__${pagePath}`,
                pagePath,
                isSelected,
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
    )
}

HeaderButton.propTypes = {
    className: PropTypes.string,
    pagePath: PropTypes.string.isRequired,
    isHomeButton: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default HeaderButton
