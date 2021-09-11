import { getPageElementForConfig } from '../../containers/Page'
import { pagesMap } from '../../content/rules'

const id = 'scoring'

export default getPageElementForConfig({
    ...pagesMap[id],
    body: `
The score for your turn is the sum of all the points gained from each domino you played on that turn.

A chord of three notes, called a triad, is worth 3 points. A chord of four notes, called a seventh chord or tetrad, is worth 4 points. If extended chords are allowed, each chord is worth in points however many notes it contains.

If you play all the dominoes in your hand on a single turn, you get a bonus of 10 points!

Within the same turn, it's possible to gain points by creating a chord with one domino, and then gain additional points by extending it with another.

The player with the highest score wins the game. A tie is possible.
    `,
})
