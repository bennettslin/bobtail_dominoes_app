import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../Flex'
import StyledShadow from '../../../Styled/Shadow'
import PeopleSvg from '../../../Svgs/People'
import DominoCard from '../../DominoCard'
import PlayerCardDomino from './Domino'
import {
    getMapHand,
    getMapIsCurrentPlayer,
    getMapIsWinner,
    getMapPlayer,
    getMapScore,
} from '../../../../redux/game/selector'
import { getPlayerSrc } from '../../../../utils/src/people'
import './style'

const PlayerCard = ({ playerIndex }) => {
    const
        player = useSelector(getMapPlayer(playerIndex)),
        hand = useSelector(getMapHand(playerIndex)),
        score = useSelector(getMapScore(playerIndex)),
        isCurrentPlayer = useSelector(getMapIsCurrentPlayer(playerIndex)),
        isWinner = useSelector(getMapIsWinner(playerIndex)),
        isFocusedPlayer = isCurrentPlayer || isWinner,
        styledShadowConfig = {
            isInset: isCurrentPlayer || isWinner,
            isCurrentHighlight: isCurrentPlayer,
            isGold: isWinner,
        }

    // Player order will rotate like a round table.
    let order = playerIndex
    if (playerIndex === 2) {
        order = 3
    } else if (playerIndex === 3) {
        order = 2
    }

    return Boolean(player) && (
        <DominoCard
            {...{
                className: cx(
                    'PlayerCard',
                ),
                hasCardStyling: isFocusedPlayer,
                label: (
                    <Flex
                        {...{
                            className: cx(
                                'PlayerCard__label',
                            ),
                            justifyContent: 'spaceBetween',
                            alignItems: 'start',
                            flexGrow: 1,
                        }}
                    >
                        <PeopleSvg
                            {...{
                                className: cx(
                                    'PlayerCard__player',
                                ),
                                src: getPlayerSrc(player),
                            }}
                        />
                        <Flex
                            {...{
                                flexDirection: 'column',
                                alignItems: 'flexEnd',
                            }}
                        >
                            <Flex {...{ gap: 'xxs' }}>
                                {isWinner && (
                                    <Flex
                                        {...{
                                            className: cx(
                                                'labelFontSize__md',
                                                'PlayerCard__winnerIcon',
                                            ),
                                        }}
                                    >
                                        <StyledShadow {...styledShadowConfig}>
                                            {'\u2605'}
                                        </StyledShadow>
                                    </Flex>
                                )}
                                <Flex
                                    {...{
                                        className: cx(
                                            'font__button',
                                            'labelFontSize__lg',
                                        ),
                                    }}
                                >
                                    <StyledShadow {...styledShadowConfig}>
                                        {score}
                                    </StyledShadow>
                                </Flex>
                            </Flex>
                            <Flex
                                {...{
                                    className: cx(
                                        'labelFontSize__sm',
                                    ),
                                }}
                            >
                                <StyledShadow {...styledShadowConfig}>
                                    {player}
                                </StyledShadow>
                            </Flex>
                        </Flex>
                    </Flex>
                ),
                figure: score,
                flexGrow: 1,
                order,
            }}
        >
            {Array.from(hand).map(dominoIndex => (
                <PlayerCardDomino
                    {...{
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
