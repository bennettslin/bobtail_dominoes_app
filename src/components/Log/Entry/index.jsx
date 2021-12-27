import React from 'react'
import PropTypes from 'prop-types'

const LogEntry = ({ entry, addSup = false }) => (
    // Entry is a string if it's just the word "and."
    typeof entry === 'string' ? (
        <>
            {entry}
            {addSup && (
                <sup />
            )}
        </>
    ) : (
        <>
            {entry.root}{entry.type}
            {/* Always render sup tag for line height consistency. */}
            <sup>{entry.sup}</sup>
        </>
    )
)

LogEntry.propTypes = {
    entry: PropTypes.oneOfType([
        PropTypes.shape({
            root: PropTypes.string,
            type: PropTypes.string,
            sup: PropTypes.string,
        }),
        PropTypes.string,
    ]),
    addSup: PropTypes.bool,
}

export default LogEntry
