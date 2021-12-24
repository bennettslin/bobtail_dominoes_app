import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Domino from '../../Domino'
import './style'

const DominoCardDomino = ({ dominoIndex }) => (
    <Domino
        {...{
            className: cx(
                'DominoCardDomino',
            ),
            dominoIndex,
        }}
    />
)

DominoCardDomino.propTypes = {
    dominoIndex: PropTypes.number.isRequired,
}

export default DominoCardDomino
