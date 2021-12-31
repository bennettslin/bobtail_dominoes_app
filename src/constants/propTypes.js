import PropTypes from 'prop-types'

export const pagePropTypes = PropTypes.shape({
    id: PropTypes.string,
    date: datePropTypes,
})

export const pagesPropTypes = PropTypes.arrayOf(
    pagePropTypes,
)

export const placementPropTypes = PropTypes.arrayOf(
    PropTypes.arrayOf(
        PropTypes.number.isRequired,
    ).isRequired,
)

export const boardPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
        dominoIndex: PropTypes.number.isRequired,
        placement: placementPropTypes,

        // Only moves have this one.
        pitchLists: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ),
    }),
)

export const datePropTypes = PropTypes.shape({
    year: PropTypes.number,
    month: PropTypes.number,
    day: PropTypes.number,
})

export const handListPropTypes = PropTypes.arrayOf(
    PropTypes.number.isRequired,
)
