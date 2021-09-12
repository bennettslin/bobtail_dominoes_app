import React from 'react'
import cx from 'classnames'
import DirectionRow from './DirectionRow'
import './style'
import TopLevelShareRow from './TopLevelShareRow'

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
