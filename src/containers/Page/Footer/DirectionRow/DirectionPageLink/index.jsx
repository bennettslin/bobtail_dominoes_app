import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageConfigContext from '../../../../../contexts/PageConfig'
import Anchor from '../../../../../components/Anchor'
import { getPagePathFromConfig } from '../../../../../utils/pages/config'
import './style'

const DirectionPageLink = ({ direction, directionPage }) => {
    if (!directionPage) {
        return null
    }

    const
        { topLevelPage } = useContext(PageConfigContext),
        {
            id,
            title,
            date,
        } = directionPage

    return Boolean(directionPage) && (
        <Anchor
            {...{
                className: cx(
                    'DirectionPageLink',
                ),
                pagePath: getPagePathFromConfig({ topLevelPage, id, date }),
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
    directionPage: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.shape({
            year: PropTypes.number.isRequired,
            month: PropTypes.number.isRequired,
            day: PropTypes.number.isRequired,
        }),
    }),
}

export default DirectionPageLink
