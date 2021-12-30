export const MOCK_MOVE_1 = {
    dominoIndex: 62,
    pitchSets: [new Set([4, 1, 8, 0])],
    placement: [[0, 2], [0, 3]],
}

export const MOCK_MOVE_2 = {
    dominoIndex: 4,
    pitchSets: [new Set([0, 4, 8])],
    placement: [[2, 0], [1, 1]],
}

export const MOCK_TURNS = [
    { dominoIndex: 29 },
    { moves: [MOCK_MOVE_1] },
]
