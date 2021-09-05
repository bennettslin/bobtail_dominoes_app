import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const Content = ({ children }) => (
    <div
        {...{
            className: cx(
                'Content',
            ),
        }}
    >
        {children}
    </div>
)

Content.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Content
