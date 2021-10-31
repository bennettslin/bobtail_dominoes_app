import { createSelector } from 'reselect'
import { GAME_STORE } from './reducer'

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

export const mapIsGamePlaying = (
    { [GAME_STORE]: { isGamePlaying } },
) => isGamePlaying

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
