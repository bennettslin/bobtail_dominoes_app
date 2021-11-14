import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Domino from '../../Domino'
import DominoCard from '../../DominoCard'
import { getMapHand, getMapIsCurrentPlayer, getMapScore } from '../../../../redux/game/selector'
import './style'

const PlayerCard = ({ playerIndex }) => {
    const
        hand = useSelector(getMapHand(playerIndex)),
        score = useSelector(getMapScore(playerIndex)),
        isCurrentPlayer = useSelector(getMapIsCurrentPlayer(playerIndex))

    return (
        <DominoCard
            {...{
                className: cx(
                    'PlayerCard',
                ),
                label: `Player ${playerIndex + 1}`,
                figure: score,
                flexGrow: 1,
            }}
        >
            {Array.from(hand).map(dominoIndex => (
                <Domino {...{ key: dominoIndex, dominoIndex }} />
            ))}
        </DominoCard>
    )
}

PlayerCard.propTypes = {
    playerIndex: PropTypes.number.isRequired,
}

export default PlayerCard
