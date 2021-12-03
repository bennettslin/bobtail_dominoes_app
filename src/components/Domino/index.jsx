import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../Flex'
import Svg from '../Svg'
import { getDominoPitches, getOrderedInterval } from '../../utils/music/game/dominoes'
import { getIsPlacementUpsideDown, getOrientation } from '../../utils/music/game/placement/orientation'
import { getFacePositionAndSizeStyling } from '../../utils/music/styling/face'
import { getDominoSrc } from '../../utils/src/dominoes'
import { getFaceSrc } from '../../utils/src/faces'
import { getDominoPositionStyling } from '../../utils/music/styling/domino/position'
import { getDominoSizeStyling } from '../../utils/music/styling/domino/size'
import { getDominoTranslateStyling } from '../../utils/music/styling/domino/translate'
import { getIntervalSrc } from '../../utils/src/intervals'
import { getIntervalPositionAndStyling } from '../../utils/music/styling/interval'
import styleConfigDominoes from '../../styles/dominoes'
import styleConfigFacesPitch from '../../styles/faces/pitch'
import styleConfigPitchOn from '../../styles/arcade/pitchOn'
import './style'

const Domino = ({
    className,
    dominoIndex,
    placement,
    isHighlight,
    boardHexagonalBaseWidth,
}) => {
    const
        pitches = getDominoPitches(dominoIndex),
        orientation = getOrientation(placement),
        orderedInterval = getOrderedInterval(dominoIndex),
        isPlacementUpsideDown = getIsPlacementUpsideDown(placement)

    return (
        <Flex
            {...{
                className: cx(
                    'Domino',
                    className,
                ),
                ...placement && {
                    style: {
                        position: 'absolute',
                        ...getDominoPositionStyling({
                            placement,
                            boardHexagonalBaseWidth,
                        }),
                        ...getDominoSizeStyling({
                            orientation,
                            boardHexagonalBaseWidth,
                        }),
                        ...getDominoTranslateStyling({ orientation }),
                    },
                },
            }}
        >
            <Svg
                {...{
                    src: getDominoSrc(orientation),
                    styleConfig: isHighlight ?
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
    isHighlight: PropTypes.bool,
    boardHexagonalBaseWidth: PropTypes.number,
}

export default Domino
