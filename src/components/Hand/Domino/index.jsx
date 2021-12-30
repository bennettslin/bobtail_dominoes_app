import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Domino from '../../Domino'
import './style'

const HandDomino = ({ dominoIndex }) => (
    <Domino
        {...{
            className: cx(
                'HandDomino',
            ),
            dominoIndex,
        }}
    />
)

HandDomino.propTypes = {
    dominoIndex: PropTypes.number.isRequired,
}

export default HandDomino
