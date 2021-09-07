import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { getArrayOfTexts } from './helper'
import './style'

// This component exists just to add negative margins to the flat symbol.
const TempListItem = ({ children }) => (
    <li
        {...{
            className: cx(
                'TempListItem',
            ),
        }}
    >
        {getArrayOfTexts(children).map((text, index) => (
            <span
                {...{
                    key: index,
                    className: cx(
                        text === '♭' && 'TempListItem__flat',
                    ),
                }}
            >
                {text}
            </span>
        ))}
    </li>
)

TempListItem.propTypes = {
    children: PropTypes.node.isRequired,
}

export default TempListItem
