import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledShadow from '../../../../Styled/Shadow'
import Svg from '../../../../Svg'
import {
    getMapHasCurrentPitch,
    getMapIsRoot,
    getMapPlayedPitchIndexConfig,
} from '../../../../../redux/audio/selector'
import { getPitchConfig } from '../../../../../utils/audio/pitch'
import { getIsPitchBlack } from '../../../../../utils/chords/label'
import {
    getBlackKeyPositionStyle,
    getKeySrc,
    getKeyStyleConfig,
} from './util'
import './style'

const KeyboardKey = ({ pitchIndex }) => {
    const
        { pitch } = getPitchConfig(pitchIndex),
        isPitchBlack = getIsPitchBlack(pitch),
        hasCurrentPitch = useSelector(getMapHasCurrentPitch(pitch)),
        isRoot = useSelector(getMapIsRoot(pitch)),
        playedPitchIndexConfig = useSelector(
            getMapPlayedPitchIndexConfig(pitchIndex),
        ),
        styleConfig = getKeyStyleConfig({
            isPitchBlack,
            hasCurrentPitch,
            isRoot,
            playedPitchIndexConfig,
        })

    return (
        <div
            {...{
                className: cx(
                    'KeyboardKey',
                    playedPitchIndexConfig && 'testing',
                ),
                ...isPitchBlack && {
                    style: {
                        position: 'absolute',
                        ...getBlackKeyPositionStyle(pitchIndex),
                    },
                },
            }}
        >
            <StyledShadow>
                <Svg
                    {...{
                        key: styleConfig.className,
                        src: getKeySrc(pitch),
                        styleConfig,
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
