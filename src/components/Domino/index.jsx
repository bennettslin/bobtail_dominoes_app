import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../Flex'
import Svg from '../Svg'
import {
    getDominoPitches,
    getOrderedInterval,
} from '../../utils/music/mechanics/dominoes'
import {
    getIsPlacementUpsideDown,
    getOrientation,
} from '../../utils/music/mechanics/placement/orientation'
import {
    getDominoPositionStyling,
    getDominoSizeStyling,
    getDominoTranslateStyling,
} from '../../utils/music/styling/domino'
import { getFacePositionAndSizeStyling } from '../../utils/music/styling/face'
import { getIntervalPositionAndSizeStyling } from '../../utils/music/styling/interval'
import { getFaceSrc } from '../../utils/src/faces'
import { getIntervalSrc } from '../../utils/src/intervals'
import {
    getTileSrc,
    getMissingTileSrc,
} from '../../utils/src/tiles'
import styleConfigDominoes from '../../styles/dominoes'
import styleConfigFacesPitch from '../../styles/faces/pitch'
import styleConfigPitchOn from '../../styles/arcade/pitchOn'
import './style'

const Domino = ({
    className,
    dominoIndex,
    placement,
    isHighlight,
    isMissing,
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
            {isMissing ? (
                <Svg
                    {...{
                        src: getMissingTileSrc(orientation),
                        styleConfig: styleConfigDominoes,
                    }}
                />
            ) : (
                <>
                    <Svg
                        {...{
                            key: isHighlight, // Fix weird unstyled issue.
                            src: getTileSrc(orientation),
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
                            style:
                                getIntervalPositionAndSizeStyling(orientation),
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
                </>
            )}
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
    isMissing: PropTypes.bool,
    boardHexagonalBaseWidth: PropTypes.number,
}

export default Domino
