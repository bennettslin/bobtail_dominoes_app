import React from 'react'
import PropTypes from 'prop-types'
import { getTextWithFlatsSeparated } from '../../utils/format/music'

const ListItem = ({ children }) => (
    <li>{getTextWithFlatsSeparated(children)}</li>
)

ListItem.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ListItem
