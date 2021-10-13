import React from 'react'
import cx from 'classnames'
import Flex from '../../../../components/Flex'
import DirectionRow from './DirectionRow'
import TopLevelShareRow from './TopLevelShareRow'
import './style'

const PageFooter = () => (
    <Flex
        {...{
            className: cx(
                'PageFooter',
            ),
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}
    >
        <DirectionRow />
        <TopLevelShareRow />
    </Flex>
)

export default PageFooter
