import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledPage = ({ className, children }) => (
    <div
        {...{
            className: cx(
                'StyledPage',
                className,
            ),
        }}
    >
        <div {...{ className: 'StyledPage__pageBottom' }} />
        <div {...{ className: 'StyledPage__pageSide' }} />
        <div {...{ className: 'StyledPage__body' }}>
            {children}
        </div>
    </div>
)

StyledPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledPage
