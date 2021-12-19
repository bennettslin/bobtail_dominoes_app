import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const ListItem = ({
    className,
    children,
    ...rest
}) => (
    <li
        {...{
            className: cx(
                'ListItem',
                className,
            ),
            ...rest,
        }}
    >
        {children}
    </li>
)

ListItem.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default ListItem
