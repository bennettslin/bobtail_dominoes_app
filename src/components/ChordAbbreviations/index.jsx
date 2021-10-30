import React from 'react'
import PropTypes from 'prop-types'
import StaticArray from '../StaticArray'

const Entry = ({ entry }) => (
    typeof entry === 'string' ? entry : (
        <>
            {entry.root}{entry.type}
            {/* Always render sup tag for line height consistency. */}
            <sup>{entry.sup}</sup>
        </>
    )
)

Entry.propTypes = {
    entry: PropTypes.oneOfType([
        PropTypes.shape({
            root: PropTypes.string,
            type: PropTypes.string,
            sup: PropTypes.string,
        }),
        PropTypes.string,
    ]),
}

const ChordAbbreviations = ({ abbreviations }) => (
    <StaticArray
        {...{
            list: abbreviations,
            Entry,
        }}
    />
)

ChordAbbreviations.propTypes = {
    abbreviations: PropTypes.arrayOf(
        Entry.propTypes.entry,
    ),
}

export default ChordAbbreviations
