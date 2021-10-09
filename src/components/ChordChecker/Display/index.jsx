import React from 'react'
import cx from 'classnames'
import Flex from '../../Flex'
import ValidIcon from './ValidIcon'
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
        <ValidIcon />
        <ChordLabel />
    </Flex>
)

export default CheckerDisplay
