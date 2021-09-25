import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const GenericPage = ({ className, children }) => (
    <div
        {...{
            className: cx(
                'GenericPage',
                className,
            ),
        }}
    >
        {children}
    </div>
)

GenericPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default GenericPage
