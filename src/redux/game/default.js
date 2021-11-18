export const UPDATE_GAME = 'updateGame'

export const GAME_DEFAULT = {
    isDemoAutoplayOn: true,
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
