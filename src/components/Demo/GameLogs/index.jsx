import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import StyledShadow from '../../Styled/Shadow'
import MoveLog from './MoveLog'
import { TurnLog } from './TurnLog'
import { margin__xs } from '../../../constants/responsive'
import './style'
import { mapHandCount, mapPlayersCount, mapTurns } from '../../../redux/game/selector'

const GameLogs = () => {
    const turns = useSelector(mapTurns)
    const playersCount = useSelector(mapPlayersCount)
    const handCount = useSelector(mapHandCount)

    return (
        <Flex
            {...{
                className: 'GameLogs',
                flexDirection: 'column',
                justifyContent: 'normal',
                alignItems: 'normal',
                flexGrow: 1,
                gap: margin__xs,
            }}
        >
            {turns.map((turn, turnIndex) => (
                <Flex
                    {...{
                        key: turnIndex,
                        flexDirection: 'column',
                        alignItems: 'normal',
                    }}
                >
                    <Flex {...{ key: turnIndex }} >
                        <StyledShadow>
                            <TurnLog {...{
                                turn,
                                turnIndex,
                                playersCount,
                                handCount,
                            }} />
                        </StyledShadow>
                    </Flex>
                    {turn.moves && (
                        <ul>
                            {turn.moves.map((move, index) => (
                                <Flex {...{ key: index }}>
                                    <StyledShadow>
                                        <MoveLog {...move} />
                                    </StyledShadow>
                                </Flex>
                            ))}
                        </ul>
                    )}
                </Flex>
            ))}
        </Flex>
    )
}

// GameLogs.propTypes = {
//     turns: PropTypes.arrayOf(
//         PropTypes.shape({
//             dominoIndex: PropTypes.number,
//             hand: PropTypes.object,
//             playerIndex: PropTypes.number,
//             moves: PropTypes.arrayOf(
//                 PropTypes.shape({
//                     dominoIndex: PropTypes.number.isRequired,
//                     pitchSets: PropTypes.arrayOf(
//                         PropTypes.object,
//                     ).isRequired,
//                     placement: PropTypes.arrayOf(
//                         PropTypes.arrayOf(
//                             PropTypes.number,
//                         ),
//                     ).isRequired,
//                 }),
//             ),
//         }),
//     ),
//     playersCount: PropTypes.number.isRequired,
//     handCount: PropTypes.number.isRequired,
// }

export default GameLogs
