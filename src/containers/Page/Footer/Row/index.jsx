import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const PageFooterRow = ({ leftChild, rightChild, hasBorderTop }) => (
    Boolean(leftChild || rightChild) && (
        <div
            {...{
                className: cx(
                    'PageFooterRow',
                    hasBorderTop && 'PageFooterRow__bottom',
                ),
            }}
        >
            <div>
                {leftChild}
            </div>
            <div>
                {rightChild}
            </div>
        </div>
    )
)

PageFooterRow.propTypes = {
    leftChild: PropTypes.node,
    rightChild: PropTypes.node,
    hasBorderTop: PropTypes.bool,
}

export default PageFooterRow
