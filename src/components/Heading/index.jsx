import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { getLinkId } from '../../utils/format/markdown'
import './style'

const Heading = ({
    isBodyHeading,
    level = 1,
    children,
}) => {
    const Tag = `h${level}`

    return (
        <Tag
            {...{
                className: cx(
                    'Heading',
                    isBodyHeading && 'Heading__bodyHeading',
                    'font__heading',
                ),
                id: getLinkId(children),
            }}
        >
            {children}
        </Tag>
    )
}

Heading.propTypes = {
    isBodyHeading: PropTypes.bool,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    children: PropTypes.node.isRequired,
}

export default Heading
