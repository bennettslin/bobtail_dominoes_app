import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../../Flex'
import StyledShadow from '../../../Styled/Shadow'
import Svg from '../../../Svg'
import styleConfigDominoes from '../../../../styles/dominoes'
import styleConfigFacesPitch from '../../../../styles/faces/pitch'
import './style'

const PoolIcon = ({
    tileSrc,
    faceSrc,
    count,
}) => (
    <Flex
        {...{
            className: cx(
                'PoolIcon',
            ),
            justifyContent: 'start',
            gap: 'xxs',
        }}
    >
        <Flex
            {...{
                className: cx(
                    'PoolIcon__icon',
                ),
            }}
        >
            <Svg
                {...{
                    src: tileSrc,
                    styleConfig: styleConfigDominoes,
                }}
            />
            <Svg
                {...{
                    className: cx(
                        'PoolIcon__face',
                    ),
                    src: faceSrc,
                    styleConfig: styleConfigFacesPitch,
                }}
            />
        </Flex>
        <Flex
            {...{
                className: cx(
                    'PoolIcon__figure',
                ),
                gap: 'xxs',
            }}
        >
            <StyledShadow>
                {count}
            </StyledShadow>
        </Flex>
    </Flex>
)

PoolIcon.propTypes = {
    tileSrc: PropTypes.string.isRequired,
    faceSrc: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
}

export default PoolIcon
