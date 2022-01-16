import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledShadow from '../../../../Styled/Shadow'
import Svg from '../../../../Svg'
import {
    getMapHasCheckerPitch,
    getMapIsCheckerRoot,
    getMapCheckerPitchIndexConfig,
} from '../../../../../redux/checker/selector'
import { getPitchConfig } from '../../../../../utils/music/audio/pitch'
import { getIsPitchBlack } from '../../../../../utils/music/chords/label'
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
        hasCheckerPitch = useSelector(getMapHasCheckerPitch(pitch)),
        isCheckerRoot = useSelector(getMapIsCheckerRoot(pitch)),
        checkerPitchIndexConfig = useSelector(
            getMapCheckerPitchIndexConfig(pitchIndex),
        ),
        styleConfig = getKeyStyleConfig({
            isPitchBlack,
            hasCheckerPitch,
            isCheckerRoot,
            checkerPitchIndexConfig,
        })

    return (
        <div
            {...{
                className: cx(
                    'KeyboardKey',
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
