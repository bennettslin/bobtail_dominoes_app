import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../Flex'
import DominoFaces from './Faces'
import DominoInterval from './Interval'
import DominoMissingTile from './Missing'
import DominoTile from './Tile'
import { getOrientation } from '../../utils/music/mechanics/placement/orientation'
import {
    getDominoPositionStyling,
    getDominoSizeStyling,
    getDominoTranslateStyling,
} from '../../utils/music/styling/domino'
import { placementPropTypes } from '../../constants/propTypes'

const Domino = ({
    className,
    dominoIndex,
    placement,
    isHighlight,
    isMissing,
    isThumbnail,
    boardHexagonalBaseWidth,
}) => {
    const orientation = getOrientation(placement)

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
                <DominoMissingTile {...{ placement }} />
            ) : (
                <>
                    <DominoTile {...{ placement, isHighlight }} />
                    <DominoInterval
                        {...{ dominoIndex, placement, isThumbnail }}
                    />
                    <DominoFaces
                        {...{ dominoIndex, placement, isThumbnail }}
                    />
                </>
            )}
        </Flex>
    )
}

Domino.propTypes = {
    className: PropTypes.string,
    dominoIndex: PropTypes.number.isRequired,
    placement: placementPropTypes,
    isHighlight: PropTypes.bool,
    isMissing: PropTypes.bool,
    isThumbnail: PropTypes.bool,
    boardHexagonalBaseWidth: PropTypes.number,
}

export default Domino
