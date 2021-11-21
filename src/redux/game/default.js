import { getBoolFromStorage } from '../../utils/storage'
import { BOARD_HEXAGONAL_BASE_WIDTH } from '../../constants/music/domino'
export const INITIALISE_GAME = 'initialiseGame'
export const REGISTER_GAME_TURN = 'registerGameTurn'

const INITIAL_IS_DEMO_AUTOPLAY_ON = getBoolFromStorage('isDemoAutoplayOn', true)

export const GAME_DEFAULT = {
    gameId: 0,
    players: [],
    pool: new Set([]),
    board: [],
    hands: [],
    scores: [],
    turns: [],
    moves: null,
    isGameOver: false,
    currentPlayerIndex: -1,
    isDemoAutoplayOn: INITIAL_IS_DEMO_AUTOPLAY_ON,
    boardHexagonalWidth: BOARD_HEXAGONAL_BASE_WIDTH,
}
