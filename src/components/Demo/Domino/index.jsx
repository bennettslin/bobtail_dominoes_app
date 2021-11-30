import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Domino from '../../Domino'
import { getMapIsDominoInLatestTurn } from '../../../redux/game/selector'

const DemoDomino = ({
    dominoIndex,
    placement,
}) => {
    const isInLatestTurn = useSelector(getMapIsDominoInLatestTurn(dominoIndex))

    return (
        <Domino
            {...{
                dominoIndex,
                placement,
                isHighlight: isInLatestTurn,
            }}
        />
    )
}

DemoDomino.propTypes = {
    dominoIndex: PropTypes.number.isRequired,
    placement: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number.isRequired,
        ).isRequired,
    ),
}

export default DemoDomino
