import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { togglePitch } from '../../../../redux/chords/action'
import { getMapIsPlayedPitch } from '../../../../redux/audio/selector'
import { getMapHasCurrentPitch, getMapIsRoot } from '../../../../redux/chords/selector'
import { getIsPitchBlack } from '../../../../utils/chords/label'
import { getButtonPositionStyle, getFaceSrc } from './util'
import styleConfigPitchBlack from '../../../../styles/checker/pitchBlack'
import styleConfigPitchOn from '../../../../styles/checker/pitchOn'
import styleConfigPitchWhite from '../../../../styles/checker/pitchWhite'
import styleConfigPlayedOn from '../../../../styles/checker/playedOn'
import styleConfigRootOn from '../../../../styles/checker/rootOn'
import './style'

const PitchButton = ({ pitch }) => {
    const
        dispatch = useDispatch(),
        isRoot = useSelector(getMapIsRoot(pitch)),
        hasCurrentPitch = useSelector(getMapHasCurrentPitch(pitch)),
        isPlayedPitch = useSelector(getMapIsPlayedPitch(pitch))

    const onClick = () => {
        dispatch(togglePitch(pitch))
    }

    return (
        <CheckerButton
            {...{
                key: [
                    isRoot,
                    isPlayedPitch,
                ].join(''),
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
                // eslint-disable-next-line no-nested-ternary
                styleConfigOn: isPlayedPitch ?
                    styleConfigPlayedOn : (
                        isRoot ?
                            styleConfigRootOn :
                            styleConfigPitchOn
                    ),
                onClick,
            }}
        />
    )
}

PitchButton.propTypes = {
    pitch: PropTypes.number.isRequired,
}

export default PitchButton
