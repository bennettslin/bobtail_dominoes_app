import React from 'react'
import PropTypes from 'prop-types'
import { getTextWithAccidentalsSeparated } from '../../utils/format/music'

const ListItem = ({ children }) => (
    <li>{getTextWithAccidentalsSeparated(children)}</li>
)

ListItem.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ListItem
