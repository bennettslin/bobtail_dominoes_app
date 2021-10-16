import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import StyledCheckerButton from '../../Styled/CheckerButton'
import CheckerButtonSvg from './ButtonSvg'
import CheckerFaceSvg from './FaceSvg'
import { mapHasSonority } from '../../../redux/chords/selector'
import './style'

const CheckerButton = ({
    className,
    faceSrc,
    enableWithSonority,
    isOn,
    reverse,
    disabled,
    styleConfig,
    styleConfigOn,
    style,
    onClick,
    ...rest
}) => {
    const hasSonority = useSelector(mapHasSonority)

    const handleButtonClick = () => {
        onClick()
    }

    return (
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
                    ...enableWithSonority && {
                        disabled: !hasSonority || disabled,
                    },
                    handleButtonClick,
                    ...rest,
                }}
            >
                <CheckerButtonSvg
                    isClicked
                    {...{
                        isOn,
                        styleConfig,
                        styleConfigOn,
                    }}
                />
                <CheckerButtonSvg
                    {...{
                        isOn,
                        styleConfig,
                        styleConfigOn,
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
}

CheckerButton.propTypes = {
    className: PropTypes.string,
    faceSrc: PropTypes.string.isRequired,
    enableWithSonority: PropTypes.bool,
    isOn: PropTypes.bool,
    reverse: PropTypes.bool,
    disabled: PropTypes.bool,
    styleConfig: PropTypes.object,
    styleConfigOn: PropTypes.object,
    style: PropTypes.object,
    onClick: PropTypes.func,
}

export default CheckerButton
