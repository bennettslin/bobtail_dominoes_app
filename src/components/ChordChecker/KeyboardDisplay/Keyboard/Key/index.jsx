import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { getPitchConfig } from '../../../../../utils/audio'
import { getIsPitchBlack } from '../../../../../utils/chords/label'
import { getMapIsPlayedPitchIndex } from '../../../../../redux/audio/selector'
import { getMapHasCurrentPitch } from '../../../../../redux/chords/selector'
import './style'

const KeyboardKey = ({ pitchIndex }) => {
    const
        { pitch } = getPitchConfig(pitchIndex),
        hasCurrentPitch = useSelector(getMapHasCurrentPitch(pitch)),
        isPlayedPitchIndex = useSelector(getMapIsPlayedPitchIndex(pitchIndex))

    return (
        <div
            {...{
                className: cx(
                    'KeyboardKey',
                    getIsPitchBlack(pitch) ?
                        'KeyboardKey__black' :
                        'KeyboardKey__white',
                    hasCurrentPitch && 'KeyboardKey__on',
                    isPlayedPitchIndex && 'KeyboardKey__current',
                ),
            }}
        />
    )
}

KeyboardKey.propTypes = {
    pitchIndex: PropTypes.number.isRequired,
}

export default KeyboardKey
