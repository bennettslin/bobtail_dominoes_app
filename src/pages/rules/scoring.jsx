import React from 'react'
import DominoesSvg from '../../components/Svgs/Dominoes'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/rules'
import scoringPoints from '../../assets/svgs/rules/scoringPoints'
import scoringExtend from '../../assets/svgs/rules/scoringExtend'
import scoringOrder from '../../assets/svgs/rules/scoringOrder'
import { BINGO_POINTS } from '../../constants/music/play'

const ID = 'scoring'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            titleHeading: 'Counting your score',
            body: [
                `
Use a score pad to keep track of your points.

A chord of three notes, called a triad, is worth 3 points. A chord of four notes, called a seventh chord or tetrad, is worth 4 points. If chords of more than four notes are allowed, each chord is worth in points however many notes it contains.
                `,
                (
                    <DominoesSvg {...{ src: scoringPoints }} />
                ),
                `
After each domino you play, add up the points for all the chords built from that domino. A chord built by extending a previous chord is worth the full number of points.

This means that within the same turn, it's possible to earn 3 points by creating a triad with one domino, and then another 4 points by extending that triad into a seventh chord with the next domino.
                `,
                (
                    <DominoesSvg {...{ src: scoringExtend }} />
                ),
                `
The order of placement sometimes matters. In the above example, had you switched the first and second dominoes, the final chords would be the same, but you would have fewer points! 
                `,
                (
                    <DominoesSvg {...{ src: scoringOrder }} />
                ),
                `
At the end of your turn, add up the total points from each domino placement. Include any points earned from chords built by rotating dominoes.

If you play all the dominoes in a full hand on any turn, you get a bonus of ${BINGO_POINTS} points!

The player with the highest score wins the game. A tie is possible.
            `,
            ],
        }}
    />
)

export default Component
