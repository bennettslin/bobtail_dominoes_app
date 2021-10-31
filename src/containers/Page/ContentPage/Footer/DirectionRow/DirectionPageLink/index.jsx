import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageConfigContext from '../../../../../../contexts/PageConfig'
import Anchor from '../../../../../../components/Anchor'
import Flex from '../../../../../../components/Flex'
import Svg from '../../../../../../components/Svg'
import arrow from '../../../../../../assets/svgs/app/arrow'
import { getCapitalizedText } from '../../../../../../utils/format'
import { getPagePathFromConfig } from '../../../../../../utils/pages/config'
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
            pathDate,
        } = directionPage

    return Boolean(directionPage) && (
        <Anchor
            {...{
                className: cx(
                    'DirectionPageLink',
                    'font__button',
                ),
                pagePath: getPagePathFromConfig({
                    topLevelPage,
                    id,
                    date: pathDate || date,
                }),
            }}
        >
            <Flex {...{ gap: 'xxs' }} >
                {direction === -1 && (
                    <Svg
                        {...{
                            className: cx(
                                'link__icon',
                            ),
                            src: arrow,
                        }}
                    />
                )}
                {title || getCapitalizedText(id)}
                {direction === 1 && (
                    <Svg
                        reverse
                        {...{
                            className: cx(
                                'link__icon',
                            ),
                            src: arrow,
                        }}
                    />
                )}
            </Flex>
        </Anchor>
    )
}

DirectionPageLink.propTypes = {
    direction: PropTypes.oneOf([-1, 1]).isRequired,
    directionPage: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.shape({
            year: PropTypes.number.isRequired,
            month: PropTypes.number.isRequired,
            day: PropTypes.number.isRequired,
        }),
        pathDate: PropTypes.shape({
            year: PropTypes.number.isRequired,
            month: PropTypes.number.isRequired,
            day: PropTypes.number.isRequired,
        }),
    }),
}

export default DirectionPageLink
