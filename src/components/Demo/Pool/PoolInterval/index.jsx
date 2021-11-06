import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../../../Flex'
import StyledShadow from '../../../Styled/Shadow'
import Svg from '../../../Svg'
import { getIntervalSrc } from './util'
import poolInterval from '../../../../assets/svgs/dominoes/poolInterval'
import styleConfigDominoes from '../../../../styles/dominoes'
import styleConfigFaces from '../../../../styles/checker/faces'
import './style'

const PoolInterval = ({ interval, intervalCount }) => (
    <Flex
        {...{
            gap: 'xs',
        }}
    >
        <Svg
            {...{
                src: poolInterval,
                styleConfig: styleConfigDominoes,
            }}
        />
        <Svg
            {...{
                className: 'PoolInterval__interval',
                src: getIntervalSrc(interval),
                styleConfig: styleConfigFaces,
            }}
        />
        <Flex>
            <StyledShadow>
                {intervalCount}
            </StyledShadow>
        </Flex>
    </Flex>
)

PoolInterval.propTypes = {
    interval: PropTypes.number.isRequired,
    intervalCount: PropTypes.number.isRequired,
}

export default PoolInterval
