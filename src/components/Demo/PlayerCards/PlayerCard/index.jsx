import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../Flex'
import StyledShadow from '../../../Styled/Shadow'
import Domino from '../../Domino'
import DominoCard from '../../DominoCard'
import { getMapHand, getMapIsCurrentPlayer, getMapScore } from '../../../../redux/game/selector'
import './style'
import { PLAYERS } from '../../../../constants/music/play'

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
                label: (
                    <Flex
                        {...{
                            className: cx(
                                'PlayerCard__label',
                            ),
                            flexDirection: 'column',
                            alignItems: 'end',
                        }}
                    >
                        <Flex
                            {...{
                                className: cx(
                                    'font__button',
                                    'labelFontSize__lg',
                                ),
                            }}
                        >
                            <StyledShadow isInset isInteractive>
                                {score}
                            </StyledShadow>
                        </Flex>
                        <Flex
                            {...{
                                className: cx(
                                    'labelFontSize__md',
                                ),
                            }}
                        >
                            <StyledShadow isInset isInteractive>
                                {PLAYERS[playerIndex]}
                            </StyledShadow>
                        </Flex>
                    </Flex>
                ),
                figure: score,
                flexGrow: 1,
            }}
        >
            {Array.from(hand).map(dominoIndex => (
                <Domino
                    {...{
                        className: cx(
                            'PlayerCard__domino',
                        ),
                        key: dominoIndex,
                        dominoIndex,
                    }}
                />
            ))}
        </DominoCard>
    )
}

PlayerCard.propTypes = {
    playerIndex: PropTypes.number.isRequired,
}

export default PlayerCard
