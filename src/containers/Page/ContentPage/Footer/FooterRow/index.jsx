import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../../../../components/Flex'
import './style'

const PageFooterRow = ({ leftChild, rightChild, isBottomRow }) => (
    <Flex
        {...{
            className: cx(
                'PageFooterRow',
                isBottomRow && 'PageFooterRow__bottom',
            ),
            justifyContent: 'space-between',
        }}
    >
        <Flex>
            {leftChild}
        </Flex>
        <Flex>
            {rightChild}
        </Flex>
    </Flex>
)

PageFooterRow.propTypes = {
    leftChild: PropTypes.node,
    rightChild: PropTypes.node,
    isBottomRow: PropTypes.bool,
}

export default PageFooterRow
