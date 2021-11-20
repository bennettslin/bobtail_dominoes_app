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
            const { gameId } = state
            return {
                ...state,
                ...getClonedPayload(getInitialGame({
                    handCount: HAND_COUNT,
                    playersCount: PLAYERS_COUNT,
                })),
                gameId: gameId + 1,
                moves: null,
                players: getShuffledArray(PLAYERS),
            }
        }
        case REGISTER_GAME_TURN: {
            const {
                pool,
                board,
                hands,
                scores,
                turns,
                currentPlayerIndex,
                moves,
            } = state

            return {
                ...state,
                ...getClonedPayload(registerTurn({
                    pool,
                    board,
                    hands,
                    scores,
                    turns,
                    playerIndex: currentPlayerIndex,
                    moves,
                    // Discarded indices are registered if there are no moves.
                    discardedIndices: Array.from(hands[currentPlayerIndex]),
                    handCount: HAND_COUNT,
                    playersCount: PLAYERS_COUNT,
                })),
                moves: null,
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
