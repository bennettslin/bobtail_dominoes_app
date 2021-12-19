import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Domino from '../../Domino'
import { getMapIsDominoInLatestTurn } from '../../../redux/game/selector'

const DemoDomino = ({
    dominoIndex,
    ...rest
}) => {
    const isInLatestTurn = useSelector(getMapIsDominoInLatestTurn(dominoIndex))

    return (
        <Domino
            {...{
                dominoIndex,
                ...rest,

                // Override value passed from board.
                isHighlight: isInLatestTurn,
            }}
        />
    )
}

DemoDomino.propTypes = {
    dominoIndex: PropTypes.number.isRequired,
}

export default DemoDomino
