import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { start } from 'tone'
import Button from '../Button'
import StyledArcadeButton from '../Styled/ArcadeButton'
import ArcadeButtonSvg from './ButtonSvg'
import ArcadeButtonFaceSvg from './FaceSvg'
import { mapIsAudioStarted } from '../../redux/audio/selector'
import { updateIsAudioStarted } from '../../redux/audio/action'
import './style'

const ArcadeButton = ({
    className,
    faceSrc,
    isOn,
    reverse,
    disabled,
    styleConfig,
    styleConfigOn,
    faceStyleConfig,
    style,
    onClick,
    ...rest
}) => {
    const
        dispatch = useDispatch(),
        isAudioStarted = useSelector(mapIsAudioStarted)

    const onClickWithStart = async () => {
        await start()
        dispatch(updateIsAudioStarted(true))
        onClick()
    }

    return (
        <StyledArcadeButton
            {...{
                className,
                style,
            }}
        >
            <Button
                {...{
                    className: cx(
                        'ArcadeButton',
                        isOn ?
                            'ArcadeButton__on' :
                            'ArcadeButton__off',
                    ),
                    disabled,
                    handleButtonClick: isAudioStarted ?
                        onClick :
                        onClickWithStart,
                    ...rest,
                }}
            >
                <ArcadeButtonSvg
                    {...{
                        isOn,
                        styleConfig,
                        styleConfigOn,
                    }}
                />
                <ArcadeButtonFaceSvg
                    {...{
                        src: faceSrc,
                        faceStyleConfig,
                        reverse,
                    }}
                />
            </Button>
        </StyledArcadeButton>
    )
}

ArcadeButton.propTypes = {
    className: PropTypes.string,
    faceSrc: PropTypes.string.isRequired,
    isOn: PropTypes.bool,
    reverse: PropTypes.bool,
    disabled: PropTypes.bool,
    styleConfig: PropTypes.object.isRequired,
    styleConfigOn: PropTypes.object,
    faceStyleConfig: PropTypes.object,
    style: PropTypes.object,
    onClick: PropTypes.func,
}

export default ArcadeButton
