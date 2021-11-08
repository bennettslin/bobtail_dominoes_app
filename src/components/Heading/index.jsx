import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { getSlugForLinkId } from '../../utils/format/markdown'
import './style'

const Heading = ({
    level = 1,
    fontSize,
    children,
}) => {
    const Tag = `h${level}`

    return Boolean(children) && (
        <Tag
            {...{
                className: cx(
                    'Heading',
                    'font__heading',
                    fontSize === 'md' && 'fontSize__md',
                ),
                id: getSlugForLinkId(children),
            }}
        >
            {children}
        </Tag>
    )
}

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    fontSize: PropTypes.oneOf(['md']),
    children: PropTypes.node.isRequired,
}

export default Heading
