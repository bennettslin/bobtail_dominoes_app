import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledFrame = ({ className, children }) => (
    <div
        {...{
            className: cx(
                'StyledFrame',
                className,
            ),
        }}
    >
        <div {...{ className: 'StyledFrame__frameBottom' }} />
        <div {...{ className: 'StyledFrame__frameFront' }} />
        <div {...{ className: 'StyledFrame__frameInset' }} />
        <div {...{ className: 'StyledFrame__body' }}>
            {children}
        </div>
    </div>
)

StyledFrame.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledFrame
