import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const FinePrint = ({
    children,
}) => (
    <div {...{ className: cx('FinePrint') }}>
        {children}
    </div>
)

FinePrint.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FinePrint
