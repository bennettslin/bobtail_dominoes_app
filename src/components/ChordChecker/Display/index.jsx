import React from 'react'
import cx from 'classnames'
import Flex from '../../Flex'
import ChordLabel from './ChordLabel'
import './style'

const CheckerDisplay = () => (
    <Flex
        {...{
            className: cx(
                'CheckerDisplay',
            ),
        }}
    >
        <ChordLabel />
    </Flex>
)

export default CheckerDisplay
