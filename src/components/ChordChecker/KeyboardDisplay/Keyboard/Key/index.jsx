import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getPitchConfig } from '../../../../../utils/audio'
import './style'
import { getIsPitchBlack } from '../../../../../utils/chords/label'
import { useSelector } from 'react-redux'
import { getMapIsCurrentPitchIndex } from '../../../../../redux/audio/selector'
import { getMapHasPitch } from '../../../../../redux/chords/selector'

const KeyboardKey = ({ pitchIndex }) => {
    const
        { pitch } = getPitchConfig(pitchIndex),
        hasPitch = useSelector(getMapHasPitch(pitch)),
        isCurrentPitchIndex = useSelector(getMapIsCurrentPitchIndex(pitchIndex))

    return (
        <div
            {...{
                className: cx(
                    'KeyboardKey',
                    getIsPitchBlack(pitch) ?
                        'KeyboardKey__black' :
                        'KeyboardKey__white',
                    hasPitch && 'KeyboardKey__on',
                    isCurrentPitchIndex && 'KeyboardKey__current',
                ),
            }}
        />
    )
}

KeyboardKey.propTypes = {
    pitchIndex: PropTypes.number.isRequired,
}

export default KeyboardKey
