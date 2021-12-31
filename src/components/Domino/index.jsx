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
                    <DominoInterval {...{ dominoIndex, placement }} />
                    <DominoFaces {...{ dominoIndex, placement }} />
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
    boardHexagonalBaseWidth: PropTypes.number,
}

export default Domino
