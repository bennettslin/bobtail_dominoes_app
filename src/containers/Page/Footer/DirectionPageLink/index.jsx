import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Anchor from '../../../../components/Anchor'
import { mapSelectedPage } from '../../../../redux/page/selector'
import { getLinkForPage } from '../../../../utils/pages'
import { getDirectionPage } from './helper'
import './style'

const DirectionPageLink = ({
    direction,
    rootPage,
    pages,
}) => {
    const
        selectedPage = useSelector(mapSelectedPage),
        directionPage = getDirectionPage({ direction, pages, selectedPage })

    const {
        id,
        title,
        date,
    } = directionPage || {}

    return Boolean(directionPage) && (
        <Anchor
            {...{
                className: cx(
                    'DirectionPageLink',
                ),
                pageLink: getLinkForPage({ rootPage, id, date }),
            }}
        >
            {direction === -1 && '❮ '}
            {title}
            {direction === 1 && ' ❯'}
        </Anchor>
    )
}

DirectionPageLink.propTypes = {
    direction: PropTypes.oneOf([-1, 1]).isRequired,
    rootPage: PropTypes.string.isRequired,
    pages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })),
}

export default DirectionPageLink
