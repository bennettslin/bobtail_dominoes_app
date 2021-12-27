import React from 'react'
import PropTypes from 'prop-types'
import LogList from '../Log/List'
import LogEntry from '../Log/Entry'

const ChordAbbreviations = ({ abbreviations }) => (
    <LogList {...{ list: abbreviations }} />
)

ChordAbbreviations.propTypes = {
    abbreviations: PropTypes.arrayOf(
        LogEntry.propTypes.entry,
    ),
}

export default ChordAbbreviations
