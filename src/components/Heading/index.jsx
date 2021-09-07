import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { getLinkId } from '../../utils/format/markdown'
import './style'

const Heading = ({
    alignCentre,
    level = 1,
    children,
}) => {
    const Tag = `h${level}`

    return (
        <Tag
            {...{
                className: cx(
                    'Heading',
                    alignCentre && 'Heading__alignCentre',
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
    alignCentre: PropTypes.bool,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    children: PropTypes.node.isRequired,
}

export default Heading
