import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ChordAbbreviations = ({ abbreviations }) => (
    abbreviations.map((entry, index) => (
        <Fragment {...{ key: index }}>
            {typeof entry === 'string' ? entry : (
                <>
                    {entry.root}{entry.type}
                    {/* Always render sup tag for line height consistency. */}
                    <sup>{entry.sup}</sup>
                </>
            )}
        </Fragment>
    ))
)

ChordAbbreviations.propTypes = {
    abbreviations: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                root: PropTypes.string.isRequired,
                type: PropTypes.string,
                sup: PropTypes.string,
            }),
            PropTypes.string,
        ]),
    ),
}

export default ChordAbbreviations
