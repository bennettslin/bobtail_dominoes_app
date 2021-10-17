import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { togglePitch } from '../../../../redux/chords/action'
import { getMapHasPitch } from '../../../../redux/chords/selector'
import { getMapIsCurrentPitch } from '../../../../redux/audio/selector'
import { getIsPitchBlack } from '../../../../utils/chords/label'
import { getButtonPositionStyle, getFaceSrc } from './helper'
import styleConfigAudioOn from '../../../../styles/checker/audioOn'
import styleConfigPitchBlack from '../../../../styles/checker/pitchBlack'
import styleConfigPitchWhite from '../../../../styles/checker/pitchWhite'
import styleConfigPitchOn from '../../../../styles/checker/pitchOn'
import './style'

const PitchButton = ({ pitch }) => {
    const
        dispatch = useDispatch(),
        hasPitch = useSelector(getMapHasPitch(pitch)),
        isCurrentPitch = useSelector(getMapIsCurrentPitch(pitch))

    const onClick = () => {
        dispatch(togglePitch(pitch))
    }

    return (
        <CheckerButton
            {...{
                className: cx(
                    'PitchButton',
                ),
                faceSrc: getFaceSrc(pitch),
                style: getButtonPositionStyle(pitch),
                isOn: hasPitch,
                ...isCurrentPitch && {
                    styleConfigOn: styleConfigAudioOn,
                },
                styleConfig: getIsPitchBlack(pitch) ?
                    styleConfigPitchBlack :
                    styleConfigPitchWhite,
                styleConfigOn: isCurrentPitch ?
                    styleConfigAudioOn :
                    styleConfigPitchOn,
                onClick,
            }}
        />
    )
}

PitchButton.propTypes = {
    pitch: PropTypes.number.isRequired,
}

export default PitchButton
