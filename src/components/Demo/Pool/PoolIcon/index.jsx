import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../../Flex'
import StyledShadow from '../../../Styled/Shadow'
import Svg from '../../../Svg'
import styleConfigDominoes from '../../../../styles/dominoes'
import styleConfigFaces from '../../../../styles/checker/faces'
import './style'

const PoolIcon = ({
    tileSrc,
    faceSrc,
    count,
}) => (
    <Flex {...{ gap: 'xxs' }}>
        <Flex
            {...{
                className: cx(
                    'PoolIcon',
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
                    className: 'PoolIcon__face',
                    src: faceSrc,
                    styleConfig: styleConfigFaces,
                }}
            />
        </Flex>
        <Flex>
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
