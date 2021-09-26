import React, { cloneElement } from 'react'
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
        {cloneElement(children, {
            className: cx(
                'StyledFrame__body',
                children.props.className,
            ),
        })}
    </div>
)

StyledFrame.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledFrame
