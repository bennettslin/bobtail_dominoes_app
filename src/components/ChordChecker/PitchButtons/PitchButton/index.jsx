import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { toggleCheckerPitch } from '../../../../redux/checker/action'
import {
    getMapHasCheckerPitch,
    getMapIsCheckerRoot,
    getMapCheckerPitchConfig,
    mapHasMaximumCheckerSonority,
} from '../../../../redux/checker/selector'
import { getIsPitchBlack } from '../../../../utils/music/chords/label'
import { getFaceSrc } from '../../../../utils/src/faces'
import {
    getButtonOnStyleConfig,
    getButtonPositionStyle,
    getButtonStyleConfig,
} from './util'
import './style'

const PitchButton = ({ pitch }) => {
    const
        dispatch = useDispatch(),
        isCheckerRoot = useSelector(getMapIsCheckerRoot(pitch)),
        hasCheckerPitch = useSelector(getMapHasCheckerPitch(pitch)),
        hasMaximumCheckerSonority = useSelector(mapHasMaximumCheckerSonority),
        checkerPitchConfig = useSelector(getMapCheckerPitchConfig(pitch)),
        styleConfig = getButtonStyleConfig(getIsPitchBlack(pitch)),
        styleConfigOn = getButtonOnStyleConfig({
            isCheckerRoot,
            checkerPitchConfig,
        })

    const onClick = () => {
        dispatch(toggleCheckerPitch(pitch))
    }

    return (
        <CheckerButton
            {...{
                key: hasCheckerPitch ?
                    styleConfigOn.className :
                    styleConfig.className,
                className: cx(
                    'PitchButton',
                ),
                faceSrc: getFaceSrc({ pitch }),
                style: getButtonPositionStyle(pitch),
                isOn: hasCheckerPitch,
                disabled: hasMaximumCheckerSonority && !hasCheckerPitch,
                styleConfig,
                styleConfigOn,
                onClick,
            }}
        />
    )
}

PitchButton.propTypes = {
    pitch: PropTypes.number.isRequired,
}

export default PitchButton
