import React from 'react'
import cx from 'classnames'
import DirectionRow from './DirectionRow'
import BackLinkShareRow from './BackLinkShareRow'
import './style'

const PageFooter = () => (
    <div
        {...{
            className: cx(
                'PageFooter',
            ),
        }}
    >
        <DirectionRow />
        <BackLinkShareRow />
    </div>
)

export default PageFooter
