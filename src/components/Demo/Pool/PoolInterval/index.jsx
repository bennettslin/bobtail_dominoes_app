import React from 'react'
import PropTypes from 'prop-types'
import PoolIcon from '../PoolIcon'
import { getIntervalSrc } from '../../../../utils/src/intervals'
import poolInterval from '../../../../assets/svgs/dominoes/poolInterval'

const PoolInterval = ({ interval, intervalCount }) => (
    <PoolIcon
        {...{
            tileSrc: poolInterval,
            faceSrc: getIntervalSrc({ interval }),
            count: intervalCount,
        }}
    />
)

PoolInterval.propTypes = {
    interval: PropTypes.number.isRequired,
    intervalCount: PropTypes.number.isRequired,
}

export default PoolInterval
