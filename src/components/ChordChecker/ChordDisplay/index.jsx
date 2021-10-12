import React from 'react'
import cx from 'classnames'
import StyledDisplay from '../../Styled/Display'
import ValidIcon from './ValidIcon'
import ChordAbbreviation from './ChordAbbreviation'
import ChordLabel from './ChordLabel'
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
                justifyContent: 'start',
                // gap: margin__xs,
            }}
        >
            <ValidIcon />
            <ChordAbbreviation />
            <ChordLabel />
        </StyledDisplay>
    </div>
)

export default ChordDisplay
