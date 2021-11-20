import { getShuffledArray } from '../../utils/general/random'
import { getInitialGame, registerTurn } from '../../utils/music/game/play'
import {
    HAND_COUNT,
    PLAYERS,
    PLAYERS_COUNT,
} from '../../constants/music/play'
import {
    GAME_DEFAULT,
    INITIALISE_GAME,
    REGISTER_GAME_TURN,
} from './default'

export const GAME_STORE = 'game'

const getClonedPayload = ({
    pool,
    board,
    hands,
    scores,
    turns,
    ...rest
}) => ({
    pool: new Set(pool),
    board: [...board],
    hands: [...hands],
    scores: [...scores],
    turns: [...turns],
    ...rest,
})

export const gameReducer = (
    state = GAME_DEFAULT,
    { type, payload },
) => {
    switch (type) {
        case INITIALISE_GAME: {
            const { gameId } = state,
                { currentPlayerIndex = -1 } = payload
            return {
                ...state,
                ...getClonedPayload(getInitialGame({
                    handCount: HAND_COUNT,
                    playersCount: PLAYERS_COUNT,
                })),
                gameId: gameId + 1,
                players: getShuffledArray(PLAYERS),
                currentPlayerIndex,
                moves: null,
            }
        }
        case REGISTER_GAME_TURN: {
            const
                {
                    pool,
                    board,
                    hands,
                    scores,
                    turns,
                    currentPlayerIndex,
                    moves,
                } = state,
                { isGameOver, ...rest } = registerTurn({
                    pool,
                    board,
                    hands,
                    scores,
                    turns,
                    playerIndex: currentPlayerIndex,
                    handCount: HAND_COUNT,
                    playersCount: PLAYERS_COUNT,

                    // Either play moves or exchange hand.
                    ...(moves && moves.length) ? {
                        moves,
                    } : {
                        discardedIndices: Array.from(
                            hands[currentPlayerIndex],
                        ),
                    },
                })

            return {
                ...state,
                ...getClonedPayload(rest),
                moves: null,
                currentPlayerIndex: isGameOver ?
                    -1 :
                    (currentPlayerIndex + 1) % PLAYERS_COUNT,
            }
        }
        case GAME_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
