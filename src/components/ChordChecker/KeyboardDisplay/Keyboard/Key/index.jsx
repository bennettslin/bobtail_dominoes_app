import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledShadow from '../../../../Styled/Shadow'
import Svg from '../../../../Svg'
import { getPitchConfig } from '../../../../../utils/audio'
import { getIsPitchBlack } from '../../../../../utils/chords/label'
import { getMapIsPlayedPitchIndex } from '../../../../../redux/audio/selector'
import { getMapHasCurrentPitch } from '../../../../../redux/chords/selector'
import { getBlackKeyPosition, getKeySrc } from './util'
import styleConfigPitchBlack from '../../../../../styles/checker/pitchBlack'
import styleConfigPitchOn from '../../../../../styles/checker/pitchOn'
import styleConfigPitchWhite from '../../../../../styles/checker/pitchWhite'
import styleConfigPlayedOn from '../../../../../styles/checker/playedOn'
import './style'

const KeyboardKey = ({ pitchIndex }) => {
    const
        { pitch } = getPitchConfig(pitchIndex),
        hasCurrentPitch = useSelector(getMapHasCurrentPitch(pitch)),
        isPlayedPitchIndex = useSelector(getMapIsPlayedPitchIndex(pitchIndex)),
        isPitchBlack = getIsPitchBlack(pitch)

    return (
        <div
            {...{
                className: cx(
                    'KeyboardKey',
                    isPitchBlack && 'KeyboardKey__black',
                ),
                ...isPitchBlack && {
                    style: getBlackKeyPosition(pitchIndex),
                },
            }}
        >
            <StyledShadow>
                <Svg
                    {...{
                        key: [hasCurrentPitch, isPlayedPitchIndex].join(''),
                        src: getKeySrc(pitch),
                        // eslint-disable-next-line no-nested-ternary
                        styleConfig: hasCurrentPitch ? (
                            isPlayedPitchIndex ?
                                styleConfigPlayedOn :
                                styleConfigPitchOn
                        ) : (
                            isPitchBlack ?
                                styleConfigPitchBlack :
                                styleConfigPitchWhite
                        ),
                    }}
                />
            </StyledShadow>
        </div>
    )
}

KeyboardKey.propTypes = {
    pitchIndex: PropTypes.number.isRequired,
}

export default KeyboardKey
