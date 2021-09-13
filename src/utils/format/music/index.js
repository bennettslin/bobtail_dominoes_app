import React from 'react'

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
        // If this is the last segment, or if latest character is a flat.
        if (indexEnd === text.length || text[indexEnd] === '♭') {
            texts.push(text.substring(indexStart, indexEnd))
            texts.push(text[indexEnd])
            indexStart = indexEnd + 1 // Reset for start of next segment.
        }
    }

    return texts.filter(text => Boolean(text))
}

export const getTextWithFlatsSeparated = children => (
    getArrayOfTextsWithFlatSeparator(children).map((text, index) => (
        text === '♭' ? (
            <span
                {...{
                    key: index,
                    className: 'Character__musicFlat',
                }}
            >
                {text}
            </span>
        ) : text
    ))
)
