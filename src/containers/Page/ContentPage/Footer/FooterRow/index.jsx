import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const PageFooterRow = ({ leftChild, rightChild, isBottomRow }) => (
    <div
        {...{
            className: cx(
                'PageFooterRow',
                isBottomRow && 'PageFooterRow__bottom',
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

PageFooterRow.propTypes = {
    leftChild: PropTypes.node,
    rightChild: PropTypes.node,
    isBottomRow: PropTypes.bool,
}

export default PageFooterRow
