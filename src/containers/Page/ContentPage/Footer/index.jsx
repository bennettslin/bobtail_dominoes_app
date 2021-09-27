import React from 'react'
import cx from 'classnames'
import DirectionRow from './DirectionRow'
import TopLevelShareRow from './TopLevelShareRow'
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
        <TopLevelShareRow />
    </div>
)

export default PageFooter
