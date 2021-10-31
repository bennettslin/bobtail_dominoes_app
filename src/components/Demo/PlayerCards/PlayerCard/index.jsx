import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Flex from '../../../Flex'
import { getMapHand, getMapScore } from '../../../../redux/game/selector'
import { getDominoPitches } from '../../../../utils/music/game/dominoes'
import { getDominoLabel } from '../../../../utils/music/chords/label'
import { margin__xs } from '../../../../constants/responsive'

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
                gap: margin__xs,
            }}
        >
            <Flex>
                Player {playerIndex + 1}: {score}
            </Flex>
            <Flex
                {...{
                    gap: margin__xs,
                }}
            >
                {Array.from(hand).map(dominoIndex => (
                    getDominoLabel(getDominoPitches(dominoIndex))
                ))}
            </Flex>
        </Flex>
    )
}

PlayerCard.propTypes = {
    playerIndex: PropTypes.number.isRequired,
}

export default PlayerCard
