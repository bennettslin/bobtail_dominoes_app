import React from 'react'
import PropTypes from 'prop-types'
import PoolIcon from '../PoolIcon'
import { getFaceSrc } from '../../../../utils/src/faces'
import poolPitch from '../../../../assets/svgs/dominoes/pool/poolPitch'

const PoolPitch = ({ pitch, pitchCount }) => (
    <PoolIcon
        {...{
            tileSrc: poolPitch,
            faceSrc: getFaceSrc({ pitch }),
            count: pitchCount,
        }}
    />
)

PoolPitch.propTypes = {
    pitch: PropTypes.number.isRequired,
    pitchCount: PropTypes.number.isRequired,
}

export default PoolPitch
