import React from 'react'
import cx from 'classnames'
import Flex from '../../Flex'
import StyledDisplay from '../../Styled/Display'
import ValidIcon from './ValidIcon'
import ChordLabel from './ChordLabel'
import { margin__xs } from '../../../constants/responsive'
import './style'

const ChordDisplay = () => (
    <StyledDisplay
        {...{
            className: cx(
                'ChordDisplay',
            ),
        }}
    >
        <Flex
            {...{
                className: cx(
                    'ChordDisplay__child',
                ),
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: margin__xs,
            }}
        >
            <ValidIcon />
            <ChordLabel />
        </Flex>
    </StyledDisplay>
)

export default ChordDisplay
