import React from 'react'
import Page from '../../containers/Page'
import PAGES_MAP from '../../content/chords'
import { FLAT, SHARP } from '../../constants/music'

const ID = 'reference'

const Component = () => (
    <Page
        {...{
            ...PAGES_MAP[ID],
            body: `
##### Triads

- Minor triad (1, ${FLAT}3, 5)
- Major triad (1, 3, 5)
- Diminished triad (1, ${FLAT}3, ${FLAT}5)
- Augmented triad (1, 3, ${SHARP}5)

##### Seventh chords

- Minor seventh (1, ${FLAT}3, 5, ${FLAT}7)
- Dominant seventh (1, 3, 5, ${FLAT}7)
- Major seventh (1, 3, 5, 7)
- Minor-major seventh (1, ${FLAT}3, 5, 7)
- Half-diminished seventh (1, ${FLAT}3, ${FLAT}5, ${FLAT}7)
- Diminished seventh (1, ${FLAT}3, ${FLAT}5, ${FLAT}${FLAT}7)
- Augmented major seventh (1, 3, ${SHARP}5, 7)
            `,
        }}
    />
)

export default Component