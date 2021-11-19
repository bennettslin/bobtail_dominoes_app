import { getBoolFromStorage } from '../../utils/storage'
export const INITIALISE_GAME = 'initialiseGame'
export const REGISTER_GAME_TURN = 'registerGameTurn'

const INITIAL_IS_DEMO_AUTOPLAY_ON = getBoolFromStorage('isDemoAutoplayOn', true)

export const GAME_DEFAULT = {
    isDemoAutoplayOn: INITIAL_IS_DEMO_AUTOPLAY_ON,
    players: [],
    pool: new Set([]),
    board: [],
    hands: [],
    scores: [],
    turns: [],
    isGameOver: true,
    currentPlayerIndex: -1,
}
