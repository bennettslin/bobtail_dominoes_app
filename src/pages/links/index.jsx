import React from 'react'
import Page from '../../containers/Page'
import { YEARLINGS_BOBTAIL_WEBSITE } from '../../constants/website'

const Component = () => (
    <Page
        {...{
            body: `
### Bobtail Yearlings links

[*Bobtail Yearlings*](https://www.bobtailyearlings.com/)${'  '}
Our band website.

[*Bobtail Method*](https://www.bobtailmethod.com/)${'  '}
Our songwriting lesson book.

[*BYCombo*](https://www.bycombo.com/)${'  '}
Our artist accelerator.

[*Yearling's Bobtail*](${YEARLINGS_BOBTAIL_WEBSITE})${'  '}
Our "*Ulysses* of Rock Albums."
            `,
        }}
    />
)

export default Component
