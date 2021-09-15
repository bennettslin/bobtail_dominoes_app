import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Svg from '../Svg'
import './style'

const DOMINO_SCALE_FACTOR = 0.2

const DominoSvg = ({
    src,
    scaleFactor = 1,
}) => (
    <div
        {...{
            className: cx(
                'DominoSvg',
            ),
        }}
    >
        <Svg
            inlineDimensions
            {...{
                src,
                scaleFactor: scaleFactor * DOMINO_SCALE_FACTOR,
            }}
        />
    </div>
)

DominoSvg.propTypes = {
    src: PropTypes.string.isRequired,
    scaleFactor: PropTypes.number,
}

export default DominoSvg
