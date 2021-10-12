import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import StyledCheckerButton from '../../Styled/CheckerButton'
import CheckerButtonSvg from './ButtonSvg'
import CheckerFaceSvg from './FaceSvg'
import './style'

const CheckerButton = ({
    className,
    faceSrc,
    isOn,
    reverse,
    styleConfig,
    style,
    ...rest
}) => (
    <StyledCheckerButton
        {...{
            className,
            style,
        }}
    >
        <Button
            {...{
                className: cx(
                    'CheckerButton',
                    isOn ?
                        'CheckerButton__on' :
                        'CheckerButton__off',
                ),
                ...rest,
            }}
        >
            <CheckerButtonSvg
                isClicked
                {...{
                    isOn,
                    styleConfig,
                }}
            />
            <CheckerButtonSvg
                {...{
                    isOn,
                    styleConfig,
                }}
            />
            <CheckerFaceSvg
                {...{
                    src: faceSrc,
                    reverse,
                }}
            />
        </Button>
    </StyledCheckerButton>
)

CheckerButton.propTypes = {
    className: PropTypes.string,
    faceSrc: PropTypes.string.isRequired,
    isOn: PropTypes.bool,
    reverse: PropTypes.bool,
    styleConfig: PropTypes.object,
    style: PropTypes.object,
}

export default CheckerButton
