import { getPageElementForConfig } from '../../../containers/Page'
import { pagesMap } from '../../../content/rules'

const id = 'setup'

export default getPageElementForConfig({
    ...pagesMap[id],
    body: `
The Standard edition consists of 48 dominoes. These represent all whole tones, minor and major thirds, and perfect fourths. The Extended edition adds semitones and tritones to the standard set, for a total of 66 dominoes.

We recommend playing the standard set, but advanced players may choose to play the extended set. To play the standard set with the Extended edition, remove all semitone and tritone dominoes.

Before playing, the players should decide on which chords are considered valid. We recommend the chords listed on this website, but extended jazz chords and set theory collections are also possible.

The players should also agree on the maximum number of dominoes held in each player's hand. We recommend three, but advanced players may wish to try four or five.

Place all dominoes face down. Each player draws a single domino from this pool. The player with a domino face closest to C, in ascending order, goes first. To break a tie, compare the other face.

Reshuffle the pool. Draw a single domino and place it on the board. Each player now draws the maximum number of dominoes into their hand.
    `,
})
