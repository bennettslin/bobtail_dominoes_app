import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import Svg from '../../Svg'
import { getMapIsDominoInLatestTurn } from '../../../redux/game/selector'
import { getDominoPitches, getOrderedInterval } from '../../../utils/music/game/dominoes'
import { getIsPlacementUpsideDown, getOrientation } from '../../../utils/music/game/placement/orientation'
import { getFacePositionAndSizeStyling } from '../../../utils/music/render/face'
import { getDominoSrc } from '../../../utils/src/dominoes'
import { getFaceSrc } from '../../../utils/src/faces'
import { getDominoTranslateStyling, getDominoPositionStyling } from '../../../utils/music/render/board/coordinates'
import { getIntervalSrc } from '../../../utils/src/intervals'
import { getIntervalPositionAndStyling } from '../../../utils/music/render/interval'
import styleConfigDominoes from '../../../styles/dominoes'
import styleConfigFacesPitch from '../../../styles/faces/pitch'
import styleConfigPitchOn from '../../../styles/checker/pitchOn'
import { DIRECTION_X } from '../../../constants/music/game'
import './style'

const Domino = ({
    className,
    dominoIndex,
    placement,
}) => {
    const
        pitches = getDominoPitches(dominoIndex),
        orientation = getOrientation(placement),
        orderedInterval = getOrderedInterval(dominoIndex),
        isPlacementUpsideDown = getIsPlacementUpsideDown(placement),
        isInLatestTurn = useSelector(getMapIsDominoInLatestTurn(dominoIndex))

    return (
        <Flex
            {...{
                className: cx(
                    'Domino',
                    placement && [
                        'Domino__placed',
                        orientation === DIRECTION_X ?
                            'Domino__horizontal' :
                            'Domino__vertical',
                    ],
                    className,
                ),
                ...placement && {
                    style: {
                        ...getDominoPositionStyling({
                            placement,
                        }),
                        ...getDominoTranslateStyling({
                            orientation,
                        }),
                    },
                },
            }}
        >
            <Svg
                {...{
                    src: getDominoSrc(orientation),
                    styleConfig: isInLatestTurn ?
                        styleConfigPitchOn :
                        styleConfigDominoes,
                }}
            />
            <Svg
                {...{
                    className: cx(
                        'Domino__face',
                    ),
                    src: getIntervalSrc({
                        interval: orderedInterval,
                        orientation,
                        isPlacementUpsideDown,
                    }),
                    styleConfig: styleConfigDominoes,
                    style: getIntervalPositionAndStyling(orientation),
                }}
            />
            {(
                getIsPlacementUpsideDown(placement) ?
                    [...pitches].reverse() :
                    pitches
            ).map((pitch, pitchIndex) => (
                <Svg
                    {...{
                        key: pitch,
                        className: cx(
                            'Domino__face',
                        ),
                        src: getFaceSrc(pitch),
                        styleConfig: styleConfigFacesPitch,
                        style: getFacePositionAndSizeStyling({
                            pitchIndex,
                            orientation,
                        }),
                    }}
                />
            ))}
        </Flex>
    )
}

Domino.propTypes = {
    className: PropTypes.string,
    dominoIndex: PropTypes.number.isRequired,
    placement: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number.isRequired,
        ).isRequired,
    ),
}

export default Domino
