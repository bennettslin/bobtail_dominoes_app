export const UPDATE_GAME = 'updateGame'

export const GAME_DEFAULT = {
    pool: new Set([]),
    board: [],
    hands: [],
    scores: [],
    turns: [],
    isGamePlaying: false,
    currentPlayerIndex: -1,
    playersCount: -1,
    handCount: -1,
}
