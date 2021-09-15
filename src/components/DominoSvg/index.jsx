import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../Flex'
import Svg from '../Svg'
import './style'

const DOMINO_SCALE_FACTOR = 0.2

const DominoSvg = ({
    src,
    scaleFactor = 1,
}) => (
    <Flex
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
    </Flex>
)

DominoSvg.propTypes = {
    src: PropTypes.string.isRequired,
    scaleFactor: PropTypes.number,
}

export default DominoSvg
