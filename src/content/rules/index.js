import { getMarkdownLinkFromId } from '../../utils/format/markdown'
const
    SETTING_UP = 'Setting up',
    PLAYING_YOUR_TURN = 'Playing your turn',
    SCORING = 'Scoring'

export const title = `Rules of the game`
export default [
    `
${getMarkdownLinkFromId(SETTING_UP)}
${getMarkdownLinkFromId(PLAYING_YOUR_TURN)}
${getMarkdownLinkFromId(SCORING)}

### ${SETTING_UP}

The Junior edition contains 48 dominoes. These represent all possible whole tones, minor and major thirds, and perfect fourths. The Standard edition adds all possible semitones and tritones, for a total of 66 dominoes.

Before playing, all players should agree on which chords are valid. You can use the Chord Checker on this website.

Place all dominoes face down. Each player draws a single domino from this pool. The player with a domino face closest to C, in ascending order, goes first. To break a tie, compare the other face.

Reshuffle the pool. Draw a single domino and place it on the board. Each player now draws five dominoes into their hand.

(Diagram with junior and standard pieces, showing intervals.)
`,
    `
### ${PLAYING_YOUR_TURN}

Upon your turn, place a single domino from your hand onto the board to create at least one valid chord. No domino previously placed on the board may be moved.

Two faces in a row is a dyad. Dyads aren't chords, so it's permissible to create any number of them. However, any three or more faces in a row must be a valid chord. No row may have duplicate faces.

Count your points from placing this first domino. You may then repeat this step for as long as you have remaining dominoes in your hand.

Upon completing your turn, tally up your points and add them to your score. Draw new dominoes until there are five in your hand, or until the pool is empty. Play passes to your left.

Rather than placing any dominoes on the board, you may also use your turn to exchange any number of dominoes in your hand. Draw the new dominoes from the pool, place your discarded ones back, and reshuffle. This ends your turn.

The game ends when no dominoes are left in the pool and a player empties their hand, or when all possible plays have been made.

(Some example plays.)
`,
    `
### ${SCORING}

The score for your turn is the sum of all the points gained by placing each domino during your turn. This means it's possible to build upon the same row for additional points within a single turn.

A chord of three faces is a triad and is worth 1 point. A chord of four faces is a tetrad and is worth 3 points. If a player empties their hand on a turn, they get a bonus of 5 points.

The player with the highest score wins the game. A tie is possible.

(Some example scores.)
`,
]
