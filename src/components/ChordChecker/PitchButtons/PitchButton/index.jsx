import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { togglePitch } from '../../../../redux/audio/action'
import { getMapHasCurrentPitch, getMapIsRoot } from '../../../../redux/audio/selector'
import { getIsPitchBlack } from '../../../../utils/chords/label'
import { getButtonPositionStyle, getFaceSrc } from './util'
import styleConfigPitchBlack from '../../../../styles/checker/pitchBlack'
import styleConfigPitchOn from '../../../../styles/checker/pitchOn'
import styleConfigPitchWhite from '../../../../styles/checker/pitchWhite'
import styleConfigRootOn from '../../../../styles/checker/rootOn'
import './style'

const PitchButton = ({ pitch }) => {
    const
        dispatch = useDispatch(),
        isRoot = useSelector(getMapIsRoot(pitch)),
        hasCurrentPitch = useSelector(getMapHasCurrentPitch(pitch))

    const onClick = () => {
        dispatch(togglePitch(pitch))
    }

    return (
        <CheckerButton
            {...{
                key: isRoot,
                className: cx(
                    'PitchButton',
                ),
                faceSrc: getFaceSrc(pitch),
                style: getButtonPositionStyle(pitch),
                isOn: hasCurrentPitch,
                styleConfig: getIsPitchBlack(pitch) ?
                    styleConfigPitchBlack :
                    styleConfigPitchWhite,
                // eslint-disable-next-line no-nested-ternary
                styleConfigOn: isRoot ?
                    styleConfigRootOn :
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
