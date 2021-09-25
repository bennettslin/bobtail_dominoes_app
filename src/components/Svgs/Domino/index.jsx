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
    isPage = true,
    scaleFactor = 1,
}) => (
    <Flex
        {...{
            className: cx(
                'DominoSvg',
                isPage && 'DominoSvg__page',
            ),
        }}
    >
        <Svg
            {...{
                src,
                scaleFactor: scaleFactor * DOMINO_SCALE_FACTOR,
                styles,
            }}
        />
    </Flex>
)

DominoSvg.propTypes = {
    src: PropTypes.string.isRequired,
    isPage: PropTypes.bool,
    scaleFactor: PropTypes.number,
}

export default DominoSvg
