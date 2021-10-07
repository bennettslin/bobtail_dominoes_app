import React from 'react'
import cx from 'classnames'
import { FLAT, SHARP } from '../../../constants/music'

const getArrayOfTextsWithFlatSeparator = children => {
    const
        text = Array.isArray(children) ? children[0] : children,
        texts = []

    if (typeof text !== 'string') {
        return children
    }

    let indexStart = 0,
        indexEnd = 0

    while (indexEnd < text.length) {
        indexEnd++
        // If this is last segment, or if latest character is an accidental.
        if (
            indexEnd === text.length ||
            text[indexEnd] === FLAT ||
            text[indexEnd] === SHARP
        ) {
            texts.push(text.substring(indexStart, indexEnd))
            texts.push(text[indexEnd])
            indexStart = indexEnd + 1 // Reset for start of next segment.
        }
    }

    return texts.filter(text => Boolean(text))
}

export const getTextWithAccidentalsSeparated = children => (
    getArrayOfTextsWithFlatSeparator(children).map((text, index) => (
        text === FLAT || text === SHARP ? (
            <span
                {...{
                    key: index,
                    className: cx(
                        'font__accidental',
                        text === FLAT && 'text__flat',
                        text === SHARP && 'text__sharp',
                    ),
                }}
            >
                {text}
            </span>
        ) : text
    ))
)
