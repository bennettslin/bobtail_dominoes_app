import { getBoolFromStorage } from '../../utils/storage'
export const UPDATE_GAME = 'updateGame'

const INITIAL_IS_DEMO_AUTOPLAY_ON = getBoolFromStorage('isDemoAutoplayOn', true)

export const GAME_DEFAULT = {
    isDemoAutoplayOn: INITIAL_IS_DEMO_AUTOPLAY_ON,
    pool: new Set([]),
    board: [],
    hands: [],
    scores: [],
    turns: [],
    isGameOver: true,
    currentPlayerIndex: -1,
    playersCount: -1,
    handCount: -1,
}
