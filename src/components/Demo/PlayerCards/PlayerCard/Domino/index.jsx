import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'
import Domino from '../../../../Domino'

const PlayerCardDomino = ({ dominoIndex }) => (
    <Domino
        {...{
            className: cx(
                'PlayerCardDomino',
            ),
            dominoIndex,
        }}
    />
)

PlayerCardDomino.propTypes = {
    dominoIndex: PropTypes.number.isRequired,
}

export default PlayerCardDomino
