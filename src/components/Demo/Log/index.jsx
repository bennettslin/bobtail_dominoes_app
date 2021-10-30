import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Flex from '../../Flex'
import StyledShadow from '../../Styled/Shadow'
import { getLogForMove, getLogForTurn } from './util'
import './style'

const DemoLog = ({ turns, playersCount, handCount }) => (
    <Flex
        {...{
            className: 'DemoLog',
            flexDirection: 'column',
            alignItems: 'normal',
        }}
    >
        {turns.map((turn, turnIndex) => (
            <Fragment {...{ key: turnIndex }}>
                <Flex {...{ key: turnIndex }} >
                    <StyledShadow>
                        {getLogForTurn({
                            turn,
                            turnIndex,
                            playersCount,
                            handCount,
                        })}
                    </StyledShadow>
                </Flex>
                {turn.moves && (
                    <ul>
                        {turn.moves.map((move, index) => (
                            <Flex {...{ key: index }}>
                                <StyledShadow>
                                    <li>{getLogForMove(move)}</li>
                                </StyledShadow>
                            </Flex>
                        ))}
                    </ul>
                )}
            </Fragment>
        ))}
    </Flex>
)

DemoLog.propTypes = {
    turns: PropTypes.arrayOf(
        PropTypes.shape({
            dominoIndex: PropTypes.number,
            hand: PropTypes.object,
            playerIndex: PropTypes.number,
            moves: PropTypes.arrayOf(
                PropTypes.shape({
                    dominoIndex: PropTypes.number.isRequired,
                    pitchSets: PropTypes.arrayOf(
                        PropTypes.object,
                    ).isRequired,
                    placement: PropTypes.arrayOf(
                        PropTypes.arrayOf(
                            PropTypes.number,
                        ),
                    ).isRequired,
                }),
            ),
        }),
    ),
    playersCount: PropTypes.number.isRequired,
    handCount: PropTypes.number.isRequired,
}

export default DemoLog
