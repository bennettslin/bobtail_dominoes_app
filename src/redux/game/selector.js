import { createSelector } from 'reselect'
import { getIsDominoInLatestTurn, getLatestTurnIndex } from '../../utils/music/render/turn'
import { GAME_STORE } from './reducer'

export const mapIsDemoAutoplayOn = (
    { [GAME_STORE]: { isDemoAutoplayOn } },
) => isDemoAutoplayOn

export const mapPool = (
    { [GAME_STORE]: { pool } },
) => pool

export const mapBoard = (
    { [GAME_STORE]: { board } },
) => board

export const mapHands = (
    { [GAME_STORE]: { hands } },
) => hands

export const mapScores = (
    { [GAME_STORE]: { scores } },
) => scores

export const mapTurns = (
    { [GAME_STORE]: { turns } },
) => turns

export const mapIsGameOver = (
    { [GAME_STORE]: { isGameOver } },
) => isGameOver

export const mapCurrentPlayerIndex = (
    { [GAME_STORE]: { currentPlayerIndex } },
) => currentPlayerIndex

export const mapPlayersCount = (
    { [GAME_STORE]: { playersCount } },
) => playersCount

export const mapHandCount = (
    { [GAME_STORE]: { handCount } },
) => handCount

export const getMapHand = playerIndex => createSelector(
    mapHands,
    hands => hands[playerIndex],
)

export const getMapScore = playerIndex => createSelector(
    mapScores,
    scores => scores[playerIndex],
)

export const mapTurnsCount = createSelector(
    mapTurns,
    turns => turns.length,
)

export const getMapTurn = turnIndex => createSelector(
    mapTurns,
    turns => turns[turnIndex],
)

export const getMapIsLatestTurn = turnIndex => createSelector(
    mapTurns,
    turns => turnIndex === getLatestTurnIndex(turns),
)

export const getMapIsDominoInLatestTurn = dominoIndex => createSelector(
    mapTurns,
    turns => getIsDominoInLatestTurn({ dominoIndex, turns }),
)

export const getMapIsCurrentPlayer = playerIndex => createSelector(
    mapCurrentPlayerIndex,
    currentPlayerIndex => playerIndex === currentPlayerIndex,
)

export const getMapIsFocusedPlayer = playerIndex => createSelector(
    mapTurns,
    getMapIsCurrentPlayer(playerIndex),
    (
        turns,
        isCurrentPlayer,
    ) => {
        const { winnerIndices } = turns[getLatestTurnIndex(turns)]

        return winnerIndices ?
            winnerIndices.some(winnerIndex => playerIndex === winnerIndex) :
            isCurrentPlayer
    },
)
