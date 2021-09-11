import { getPageElementForConfig } from '../../containers/Page'
import { pagesMap } from '../../content/rules'

const id = 'playing'

export default getPageElementForConfig({
    ...pagesMap[id],
    body: `
When it's your turn, place a single domino from your hand onto the board to create at least one valid chord. No domino previously placed on the board may be moved.

Two faces in a row make up a dyad. Dyads aren't chords, and it's permitted to create any number of them. However, any three or more faces in a row must be a valid chord. No row may have duplicate faces.

Count the points earned from playing this domino. You may then repeat this step for each remaining domino in your hand until none are left.

Upon completing your turn, tally up all your points and add them to your score. Draw new dominoes until you have the maximum number in your hand, or until the pool is empty. Play passes to your left.

Instead of placing any dominoes on the board, you may use your turn to exchange all, some, or none of the dominoes in your hand. Draw the new dominoes from the pool, return your discarded ones, and reshuffle. This ends your turn.

The game ends when no dominoes are left in the pool and a player empties their hand, or when no possible plays are left to be made.
    `,
})