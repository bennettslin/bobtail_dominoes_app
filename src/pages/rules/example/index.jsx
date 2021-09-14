import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/rules'

const id = 'example'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            titleHeading: 'An example turn',
            body: [
                `
Let's imagine we've started a game, and it's now your turn! You have three dominoes in your hand. Here's what the board looks like.
                `,
                // Image here.
                `
You place your first domino on the board. This creates two chords, a triad and a seventh chord, for a total of 7 points.
                `,
                // Image here.
                `
You then place your second domino on the board, creating another triad and another seventh chord for an additional 7 points.
                `,
                // Image here.
                `
Notice that this seventh chord extends the triad that you created with your first domino. The order here matters! Had you placed the second domino first, the chords would still be the same, but you would have fewer points.

Finally, you're ready to place your third domino on the board, this time to create a seventh chord for 4 points. But only one face of the domino is needed for this chord, which means there are several possible orientations.
                `,
                // Image here.
                `
Time for some strategy! You decide to place the G face in line with another G face on the board. This prevents your opponents from connecting them, since no chord can have duplicate faces. Your G face also lines up with an F♯-G♭ face to create a semitone dyad, which is very hard to build into a chord.

Don't forget that you played all the dominoes in your hand. That's a bonus of 10 points! Now let's add up your points for this turn.

7 + 7 + 4 + 10 = 28 points!
                `,
            ],
        }}
    />
)

export default Component
