import React from 'react'
import cx from 'classnames'
import StyledDisplay from '../../Styled/Display'
import ValidIcon from './ValidIcon'
import ChordLabel from './ChordLabel'
import { margin__xs } from '../../../constants/responsive'
import './style'

const ChordDisplay = () => (
    <div
        {...{
            className: cx(
                'ChordDisplay__container',
            ),
        }}
    >
        <StyledDisplay
            {...{
                className: cx(
                    'ChordDisplay',
                ),
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: margin__xs,
            }}
        >
            <ValidIcon />
            <ChordLabel />
        </StyledDisplay>
    </div>
)

export default ChordDisplay
