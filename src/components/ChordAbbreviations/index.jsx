import React from 'react'
import PropTypes from 'prop-types'
import { entryPropTypes } from '../Log/Entry'
import LogList from '../Log/List'

const ChordAbbreviations = ({ abbreviations }) => (
    <LogList {...{ list: abbreviations }} />
)

ChordAbbreviations.propTypes = {
    abbreviations: PropTypes.arrayOf(
        entryPropTypes,
    ),
}

export default ChordAbbreviations
