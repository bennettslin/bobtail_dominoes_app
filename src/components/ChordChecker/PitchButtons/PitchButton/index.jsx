import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { togglePitch } from '../../../../redux/chords/action'
import { getMapHasCurrentPitch } from '../../../../redux/chords/selector'
import { getMapIsPlayedPitch } from '../../../../redux/audio/selector'
import { getIsPitchBlack } from '../../../../utils/chords/label'
import { getButtonPositionStyle, getFaceSrc } from './util'
import styleConfigPitchBlack from '../../../../styles/checker/pitchBlack'
import styleConfigPitchOn from '../../../../styles/checker/pitchOn'
import styleConfigPitchWhite from '../../../../styles/checker/pitchWhite'
import styleConfigPlayedOn from '../../../../styles/checker/playedOn'
import './style'

const PitchButton = ({ pitch }) => {
    const
        dispatch = useDispatch(),
        hasCurrentPitch = useSelector(getMapHasCurrentPitch(pitch)),
        isPlayedPitch = useSelector(getMapIsPlayedPitch(pitch))

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
                isOn: hasCurrentPitch,
                ...isPlayedPitch && {
                    styleConfigOn: styleConfigPlayedOn,
                },
                styleConfig: getIsPitchBlack(pitch) ?
                    styleConfigPitchBlack :
                    styleConfigPitchWhite,
                styleConfigOn: isPlayedPitch ?
                    styleConfigPlayedOn :
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
