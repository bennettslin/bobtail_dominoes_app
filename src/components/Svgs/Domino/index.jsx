import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import Svg from '../../Svg'
import styles from './styles'
import './style'

const DOMINO_SCALE_FACTOR = 0.2

const DominoSvg = ({
    src,
    className,
    isFigure = true,
    scaleFactor = 1,
}) => (
    <Flex
        {...{
            className: cx(
                'DominoSvg',
                `DominoSvg__${className}`,
                isFigure ?
                    'DominoSvg__figure' :
                    'DominoSvg__full',
            ),
        }}
    >
        <Svg
            {...{
                src,
                className,
                scaleFactor: scaleFactor * DOMINO_SCALE_FACTOR,
                styles,
            }}
        />
    </Flex>
)

DominoSvg.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    isFigure: PropTypes.bool,
    scaleFactor: PropTypes.number,
}

export default DominoSvg
