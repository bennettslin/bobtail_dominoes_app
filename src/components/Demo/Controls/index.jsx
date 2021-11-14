import React from 'react'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const Controls = () => {
    return (
        <Flex
            {...{
                className: cx(
                    'Controls',
                ),
                flexGrow: 1,
            }}
        >
            Hello
        </Flex>
    )
}

export default Controls
