import { getMarkdownLinkFromText } from '../../utils/format/markdown'
const
    SETTING_UP = 'Setting up',
    PLAYING_A_TURN = 'Playing a turn',
    SCORING = 'Scoring'

export default {
    title: `Standard rules`,
    body: [
        `
${getMarkdownLinkFromText(SETTING_UP)}
${getMarkdownLinkFromText(PLAYING_A_TURN)}
${getMarkdownLinkFromText(SCORING)}

### ${SETTING_UP}

The Standard edition consists of 48 dominoes. These represent all whole tones, minor and major thirds, and perfect fourths. The Extended edition adds semitones and tritones to the standard set, for a total of 66 dominoes.

We recommend playing the standard set, but advanced players may choose to play the extended set. If playing the standard set with the Extended edition, remove all semitone and tritone dominoes.

Before playing, the players should decide on which chords are considered valid. We recommend the ones listed on the chords page of this website, but extended jazz chords and set theory collections are also possible.

The players should also agree on the maximum number of dominoes held in each player's hand. We recommend three, but advanced players may wish to try four or five.

Place all dominoes face down. Each player draws a single domino from this pool. The player with a domino face closest to C, in ascending order, goes first. To break a tie, compare the other face.

Reshuffle the pool. Draw a single domino and place it on the board. Each player now draws the maximum number of dominoes into their hand.
        `,
        // (Diagram with junior and standard pieces, showing intervals.)
        `
### ${PLAYING_A_TURN}

When it's your turn, place a single domino from your hand onto the board to create at least one valid chord. No domino previously placed on the board may be moved.

Two faces in a row make up a dyad. Dyads aren't chords, and it's permitted to create any number of them. However, any three or more faces in a row must be a valid chord. No row may have duplicate faces.

Count the points earned from playing this domino. You may then repeat this step for each remaining domino in your hand until none are left.

Upon completing your turn, tally up all your points and add them to your score. Draw new dominoes until you have the maximum number in your hand, or until the pool is empty. Play passes to your left.

Instead of placing any dominoes on the board, you may use your turn to exchange all, some, or none of the dominoes in your hand. Draw the new dominoes from the pool, return your discarded ones, and reshuffle. This ends your turn.

The game ends when no dominoes are left in the pool and a player empties their hand, or when no possible plays are left to be made.
        `,
        // (Some example plays.)
        `
### ${SCORING}

The score for your turn is the sum of all the points gained from each domino you played on that turn.

A chord of three notes, called a triad, is worth 3 points. A chord of four notes, called a seventh chord or tetrad, is worth 4 points. If extended chords are allowed, each chord is worth in points however many notes it contains.

If you play all the dominoes in your hand on a single turn, you get a bonus of 10 points!

Within the same turn, it's possible to gain points by creating a chord with one domino, and then gain additional points by extending it with another.

The player with the highest score wins the game. A tie is possible.
        `,
        // (Some example scores.)
    ],
}
