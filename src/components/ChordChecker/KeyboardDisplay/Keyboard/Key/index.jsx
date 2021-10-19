import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledShadow from '../../../../Styled/Shadow'
import Svg from '../../../../Svg'
import { getPitchConfig } from '../../../../../utils/audio/pitch'
import { getIsPitchBlack } from '../../../../../utils/chords/label'
import { getMapHasCurrentPitch, getMapIsRoot } from '../../../../../redux/audio/selector'
import { getBlackKeyPositionStyle, getKeySrc } from './util'
import styleConfigPitchBlack from '../../../../../styles/checker/pitchBlack'
import styleConfigPitchOn from '../../../../../styles/checker/pitchOn'
import styleConfigPitchWhite from '../../../../../styles/checker/pitchWhite'
import styleConfigRootOn from '../../../../../styles/checker/rootOn'
import './style'

const KeyboardKey = ({ pitchIndex }) => {
    const
        { pitch } = getPitchConfig(pitchIndex),
        isRoot = useSelector(getMapIsRoot(pitch)),
        hasCurrentPitch = useSelector(getMapHasCurrentPitch(pitch)),
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
                    style: getBlackKeyPositionStyle(pitchIndex),
                },
            }}
        >
            <StyledShadow>
                <Svg
                    {...{
                        key: [
                            isRoot,
                            hasCurrentPitch,
                        ].join(''),
                        src: getKeySrc(pitch),
                        // eslint-disable-next-line no-nested-ternary
                        styleConfig: hasCurrentPitch ? (
                            isRoot ?
                                styleConfigRootOn :
                                styleConfigPitchOn
                        ) : (
                            isPitchBlack ?
                                styleConfigPitchBlack :
                                styleConfigPitchWhite
                        ),
                        scaleFactor: 0.2,
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
