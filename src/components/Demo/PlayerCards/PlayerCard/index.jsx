import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Flex from '../../../Flex'
import { getMapHand, getMapScore } from '../../../../redux/game/selector'
import { getDominoPitches } from '../../../../utils/music/game/dominoes'
import { getDominoLabel } from '../../../../utils/music/chords/label'

const PlayerCard = ({ playerIndex }) => {
    const
        hand = useSelector(getMapHand(playerIndex)),
        score = useSelector(getMapScore(playerIndex))

    return (
        <Flex
            {...{
                className: 'PlayerCard',
                flexDirection: 'column',
                alignItems: 'start',
                gap: 'xs',
                style: {
                    minHeight: '100px',
                    border: '1px solid #dfd',
                },
            }}
        >
            <Flex>
                Player {playerIndex + 1}: {score}
            </Flex>
            <Flex {...{ gap: 'xs' }} >
                {Array.from(hand).map(dominoIndex => (
                    getDominoLabel(getDominoPitches(dominoIndex))
                )).join(' ')}
            </Flex>
        </Flex>
    )
}

PlayerCard.propTypes = {
    playerIndex: PropTypes.number.isRequired,
}

export default PlayerCard
