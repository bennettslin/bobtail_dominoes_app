import PropTypes from 'prop-types'

export const boardPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
        dominoIndex: PropTypes.number.isRequired,
        placement: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ),

        // Only moves have this one.
        pitchLists: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ),
    }),
)

export const datePropTypes = PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired,
})

export const handListPropTypes = PropTypes.arrayOf(
    PropTypes.number.isRequired,
)
