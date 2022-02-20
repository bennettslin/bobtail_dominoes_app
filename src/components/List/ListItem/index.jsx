import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const ListItem = ({
    className,
    children,
    hasGap,
    ...rest
}) => (
    <li
        {...{
            className: cx(
                'ListItem',
                hasGap && 'ListItem__gap',
                className,
            ),
            ...rest,
        }}
    >
        {children}
    </li>
)

ListItem.propTypes = {
    hasGap: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default ListItem
