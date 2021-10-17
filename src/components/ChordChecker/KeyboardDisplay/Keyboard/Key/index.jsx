import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Svg from '../../../../Svg'
import StyledShadow from '../../../../Styled/Shadow'
import { getPitchConfig } from '../../../../../utils/audio'
import { getIsPitchBlack } from '../../../../../utils/chords/label'
import { getMapIsPlayedPitchIndex } from '../../../../../redux/audio/selector'
import { getMapHasCurrentPitch } from '../../../../../redux/chords/selector'
import { getBlackKeyPosition } from '../util'
import styleConfigAudioOn from '../../../../../styles/checker/audioOn'
import styleConfigPitchBlack from '../../../../../styles/checker/pitchBlack'
import styleConfigPitchOn from '../../../../../styles/checker/pitchOn'
import styleConfigPitchWhite from '../../../../../styles/checker/pitchWhite'
import keyBlack from '../../../../../assets/svgs/chords/keyBlack'
import keyWhite from '../../../../../assets/svgs/chords/keyWhite'
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
                    isPitchBlack ?
                        'KeyboardKey__black' :
                        'KeyboardKey__white',
                ),
                ...isPitchBlack && {
                    style: getBlackKeyPosition(pitchIndex),
                },
            }}
        >
            <StyledShadow>
                <Svg
                    {...{
                        src: isPitchBlack ?
                            keyBlack :
                            keyWhite,
                        // eslint-disable-next-line no-nested-ternary
                        styleConfig: hasCurrentPitch ? (
                            isPlayedPitchIndex ?
                                styleConfigAudioOn :
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
