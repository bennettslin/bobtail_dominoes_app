import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../../../Flex'
import StyledShadow from '../../../Styled/Shadow'
import Svg from '../../../Svg'
import styleConfigDominoes from '../../../../styles/dominoes'
import styleConfigFaces from '../../../../styles/checker/faces'
import { getFaceSrc } from '../../../../utils/src/faces'
import poolPitch from '../../../../assets/svgs/dominoes/poolPitch'
import './style'

const PoolPitch = ({ pitch, pitchCount }) => (
    <Flex
        {...{
            gap: 'xs',
        }}
    >
        <Svg
            {...{
                src: poolPitch,
                styleConfig: styleConfigDominoes,
            }}
        />
        <Svg
            {...{
                className: 'PoolPitch__pitch',
                src: getFaceSrc(pitch),
                styleConfig: styleConfigFaces,
            }}
        />
        <Flex>
            <StyledShadow>
                {pitchCount}
            </StyledShadow>
        </Flex>
    </Flex>
)

PoolPitch.propTypes = {
    pitch: PropTypes.number.isRequired,
    pitchCount: PropTypes.number.isRequired,
}

export default PoolPitch
