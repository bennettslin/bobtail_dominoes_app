import React from 'react'
import PropTypes from 'prop-types'
import PoolIcon from '../PoolIcon'
import { getPoolIntervalSrc } from '../../../../utils/src/pool'
import poolInterval from '../../../../assets/svgs/dominoes/pool/poolInterval'

const PoolInterval = ({ interval, intervalCount }) => (
    <PoolIcon
        {...{
            tileSrc: poolInterval,
            faceSrc: getPoolIntervalSrc({ interval }),
            count: intervalCount,
        }}
    />
)

PoolInterval.propTypes = {
    interval: PropTypes.number.isRequired,
    intervalCount: PropTypes.number.isRequired,
}

export default PoolInterval
