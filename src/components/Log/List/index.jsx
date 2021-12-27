import React from 'react'
import PropTypes from 'prop-types'
import LogEntry from '../Entry'

const LogList = ({ list = [] }) => (
    list.map((entry, index) => (
        <LogEntry {...{ key: index, entry }} />
    ))
)

LogList.propTypes = {
    list: PropTypes.array.isRequired,
}

export default LogList
