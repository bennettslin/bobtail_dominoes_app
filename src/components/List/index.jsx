import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const List = ({
    className,
    fontSize,
    isClean,
    children,
    ...rest
}) => (
    <ul
        {...{
            className: cx(
                'List',
                isClean && 'List__clean',
                fontSize === 'md' && 'fontSize__md',
                className,
            ),
            ...rest,
        }}
    >
        {children}
    </ul>
)

List.propTypes = {
    className: PropTypes.string,
    fontSize: PropTypes.oneOf(['md']),
    isClean: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default List
