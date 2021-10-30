import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const DefaultEntry = ({ entry }) => entry

const Array = ({ list = [], Entry = DefaultEntry }) => (
    list.map((entry, index) => (
        <Fragment {...{ key: index }}>
            <Entry {...{ entry }} />
        </Fragment>
    ))
)

Array.propTypes = {
    list: PropTypes.array,
    Entry: PropTypes.func,
}

export default Array
