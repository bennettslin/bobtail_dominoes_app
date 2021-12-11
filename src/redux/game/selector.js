import { createSelector } from 'reselect'
import { getIsWinner } from '../../utils/music/mechanics/points'
import {
    getIsDominoInLatestTurn,
    getLatestTurnIndex,
} from '../../utils/music/render/turn'
import { GAME_STORE } from './reducer'

export const mapGameId = (
    { [GAME_STORE]: { gameId } },
) => gameId

export const mapPlayers = (
    { [GAME_STORE]: { players } },
) => players

export const mapPool = (
    { [GAME_STORE]: { pool } },
) => pool

export const mapBoard = (
    { [GAME_STORE]: { board } },
) => board

const mapHands = (
    { [GAME_STORE]: { hands } },
) => hands

export const mapScores = (
    { [GAME_STORE]: { scores } },
) => scores

export const mapTurns = (
    { [GAME_STORE]: { turns } },
) => turns

export const mapMoves = (
    { [GAME_STORE]: { moves } },
) => moves

export const mapIsGameOver = (
    { [GAME_STORE]: { isGameOver } },
) => isGameOver

export const mapCurrentPlayerIndex = (
    { [GAME_STORE]: { currentPlayerIndex } },
) => currentPlayerIndex

export const mapIsDemoAutoplayOn = (
    { [GAME_STORE]: { isDemoAutoplayOn } },
) => isDemoAutoplayOn

export const mapBoardHexagonalWidth = (
    { [GAME_STORE]: { boardHexagonalWidth } },
) => boardHexagonalWidth

export const getMapPlayer = playerIndex => createSelector(
    mapPlayers,
    players => players[playerIndex],
)

export const mapCurrentHand = createSelector(
    mapHands,
    mapCurrentPlayerIndex,
    (
        hands,
        currentPlayerIndex,
    ) => hands[currentPlayerIndex],
)

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

export const getMapIsWinner = playerIndex => createSelector(
    mapTurns,
    turns => getIsWinner({
        turns,
        playerIndex,
    }),
)
