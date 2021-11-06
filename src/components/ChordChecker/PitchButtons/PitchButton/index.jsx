import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { togglePitch } from '../../../../redux/audio/action'
import {
    getMapHasCurrentPitch,
    getMapIsRoot,
    getMapPlayedPitchConfig,
} from '../../../../redux/audio/selector'
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
        isRoot = useSelector(getMapIsRoot(pitch)),
        hasCurrentPitch = useSelector(getMapHasCurrentPitch(pitch)),
        playedPitchConfig = useSelector(getMapPlayedPitchConfig(pitch)),
        styleConfig = getButtonStyleConfig(getIsPitchBlack(pitch)),
        styleConfigOn = getButtonOnStyleConfig({
            isRoot,
            playedPitchConfig,
        })

    const onClick = () => {
        dispatch(togglePitch(pitch))
    }

    return (
        <CheckerButton
            {...{
                key: hasCurrentPitch ?
                    styleConfigOn.className :
                    styleConfig.className,
                className: cx(
                    'PitchButton',
                    playedPitchConfig && 'testing',
                ),
                faceSrc: getFaceSrc(pitch),
                style: getButtonPositionStyle(pitch),
                isOn: hasCurrentPitch,
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
