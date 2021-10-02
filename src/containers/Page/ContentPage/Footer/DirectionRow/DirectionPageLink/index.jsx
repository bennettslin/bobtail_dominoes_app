import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageConfigContext from '../../../../../../contexts/PageConfig'
import Anchor from '../../../../../../components/Anchor'
import Flex from '../../../../../../components/Flex'
import Svg from '../../../../../../components/Svg'
import popupClose from '../../../../../../assets/svgs/app/popupClose'
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
        } = directionPage

    return Boolean(directionPage) && (
        <Anchor
            {...{
                className: cx(
                    'DirectionPageLink',
                    'font__button',
                ),
                pagePath: getPagePathFromConfig({ topLevelPage, id, date }),
            }}
        >
            <Flex
                {...{
                    className: cx(
                        'DirectionPageLink__flex',
                    ),
                }}
            >
                {direction === -1 && (
                    <Svg
                        {...{
                            className: cx(
                                'link__icon',
                            ),
                            src: popupClose,
                        }}
                    />
                )}
                {title}
                {direction === 1 && (
                    <Svg
                        {...{
                            className: cx(
                                'link__icon',
                            ),
                            src: popupClose,
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
        title: PropTypes.string.isRequired,
        date: PropTypes.shape({
            year: PropTypes.number.isRequired,
            month: PropTypes.number.isRequired,
            day: PropTypes.number.isRequired,
        }),
    }),
}

export default DirectionPageLink
