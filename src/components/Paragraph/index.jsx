import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { getTextWithFlatsSeparated } from '../../utils/format/music'
import './style'

const Paragraph = ({
    className,
    children,
}) => (
    <p
        {...{
            className: cx(
                'Paragraph',
                className,
            ),
        }}
    >
        {getTextWithFlatsSeparated(children)}
    </p>
)

Paragraph.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Paragraph
