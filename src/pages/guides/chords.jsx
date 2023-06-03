import React from 'react'
import ChordChecker from '../../components/ChordChecker'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/guides'

const ID = 'chords'
const TITLE = 'Chord checker'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            titleHeading: TITLE,
            metaTitle: TITLE,
            body: [
                (
                    <ChordChecker />
                ),
                `
##### Triads

- Minor triad (1, ♭3, 5)
- Major triad (1, 3, 5)
- Diminished triad (1, ♭3, ♭5)
- Augmented triad (1, 3, ♯5)

##### Seventh chords

- Minor seventh (1, ♭3, 5, ♭7)
- Dominant seventh (1, 3, 5, ♭7)
- Major seventh (1, 3, 5, 7)
- Minor-major seventh (1, ♭3, 5, 7)
- Half-diminished seventh (1, ♭3, ♭5, ♭7)
- Diminished seventh (1, ♭3, ♭5, ♭♭7)
- Augmented major seventh (1, 3, ♯5, 7)
                `,
            ],
        }}
    />
)

export default Component
