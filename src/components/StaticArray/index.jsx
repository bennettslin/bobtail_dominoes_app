import React from 'react'
import PropTypes from 'prop-types'

const DefaultEntry = ({ entry }) => entry

const StaticArray = ({ list = [], Entry = DefaultEntry }) => (
    list.map((entry, index) => (
        <Entry {...{ key: index, entry }} />
    ))
)

StaticArray.propTypes = {
    list: PropTypes.array,
    Entry: PropTypes.func,
}

export default StaticArray
