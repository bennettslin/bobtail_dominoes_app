import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Domino from '../../Domino'
import './style'

const HandDomino = ({ dominoIndex, isThumbnail }) => (
    <Domino
        {...{
            className: cx(
                'HandDomino',
            ),
            dominoIndex,
            isThumbnail,
        }}
    />
)

HandDomino.propTypes = {
    dominoIndex: PropTypes.number.isRequired,
    isThumbnail: PropTypes.bool,
}

export default HandDomino
