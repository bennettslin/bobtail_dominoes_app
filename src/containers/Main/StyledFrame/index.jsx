import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import './style'

const StyledFrame = ({ className, children }) => (
    <Flex
        {...{
            className: cx(
                'StyledFrame',
                className,
            ),
        }}
    >
        <div className="StyledFrame__frameBottom" />
        <div className="StyledFrame__frameFront" />
        <div className="StyledFrame__frameInset" />
        <div className="StyledFrame__body">
            {children}
        </div>
    </Flex>
)

StyledFrame.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledFrame
