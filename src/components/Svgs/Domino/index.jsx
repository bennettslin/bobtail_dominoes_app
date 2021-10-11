import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import Svg from '../../Svg'
import styleConfigDominoes from '../../../styles/dominoes'
import './style'

const DOMINO_SCALE_FACTOR = 0.225

const DominoSvg = ({
    src,
    className,
    isFigure = true,
    scaleFactor = 1,
    styleConfig = styleConfigDominoes,
    onLoad,
}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <Flex
            {...{
                className: cx(
                    'DominoSvg',
                    className && `DominoSvg__${className}`,
                    isFigure ?
                        'DominoSvg__figure' :
                        'DominoSvg__full',
                    !onLoad && [
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
                    styleConfig,
                    onLoad: () => {
                        setIsLoaded(true)
                        if (onLoad) {
                            onLoad()
                        }
                    },
                }}
            />
        </Flex>
    )
}

DominoSvg.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    isFigure: PropTypes.bool,
    scaleFactor: PropTypes.number,
    styleConfig: PropTypes.shape({
        className: PropTypes.string.isRequired,
        styles: PropTypes.object.isRequired,
    }),
    onLoad: PropTypes.func,
}

export default DominoSvg
