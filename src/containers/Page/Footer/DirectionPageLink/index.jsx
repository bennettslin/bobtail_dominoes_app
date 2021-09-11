import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Anchor from '../../../../components/Anchor'
import { getLinkForPage } from '../../../../utils/pages'
import './style'

const DirectionPageLink = ({
    isPrevious,
    isNext,
    rootPage,
    id,
    title,
    date,
}) => (
    <Anchor
        {...{
            className: cx(
                'DirectionPageLink',
            ),
            pageLink: getLinkForPage({ rootPage, id, date }),
        }}
    >
        {isPrevious && '❮ '}
        {title}
        {isNext && ' ❯'}
    </Anchor>
)

DirectionPageLink.propTypes = {
    isPrevious: PropTypes.bool,
    isNext: PropTypes.bool,
    rootPage: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.object,
}

export default DirectionPageLink
