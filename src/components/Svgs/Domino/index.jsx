import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import Svg from '../../Svg'
import styles from './styles'
import './style'

const DOMINO_SCALE_FACTOR = 0.225

const DominoSvg = ({
    src,
    className,
    isFigure = true,
    doTransitionEnter = true,
    scaleFactor = 1,
}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    const onLoad = () => {
        setIsLoaded(true)
    }

    return (
        <Flex
            {...{
                className: cx(
                    'DominoSvg',
                    className && `DominoSvg__${className}`,
                    isFigure ?
                        'DominoSvg__figure' :
                        'DominoSvg__full',
                    doTransitionEnter && [
                        'hidden',
                        isLoaded && 'shown',
                    ],
                ),
            }}
        >
            <Svg
                {...{
                    src,
                    className,
                    scaleFactor: scaleFactor * DOMINO_SCALE_FACTOR,
                    styles,
                    onLoad,
                }}
            />
        </Flex>
    )
}

DominoSvg.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    isFigure: PropTypes.bool,
    doTransitionEnter: PropTypes.number,
    scaleFactor: PropTypes.number,
}

export default DominoSvg
