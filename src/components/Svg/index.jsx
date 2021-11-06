import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactInlineSvg from 'react-inlinesvg'
import { getSvgWithDimensions } from './utils/dimensions'
import { getSvgWithClassStyles } from './utils/styles'
import './style'

const Svg = ({
    src,
    className,
    reverse,
    scaleFactor,
    styleConfig: {
        className: styleClassName,
        keyframes,
        styles,
    } = {},
    onLoad = () => {},
    ...rest

}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    const preProcessor = svgString => (
        getSvgWithClassStyles({
            styleClassName,
            svgString: getSvgWithDimensions({
                svgString,
                scaleFactor,
            }),
            keyframes,
            styles,
        })
    )

    return (
        <ReactInlineSvg
            {...{
                xmlns: 'http://www.w3.org/2000/svg',
                src,
                className: cx(
                    [
                        'hidden',
                        isLoaded && 'shown',
                    ],
                    reverse && 'Svg__reverse',
                    className,
                    styleClassName,
                ),
                preProcessor,
                onLoad: () => {
                    setIsLoaded(true)
                    onLoad()
                },
                ...rest,
            }}
        />
    )
}

Svg.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    reverse: PropTypes.bool,
    scaleFactor: PropTypes.number,
    styleConfig: PropTypes.shape({
        className: PropTypes.string.isRequired,
        styles: PropTypes.object.isRequired,
    }),
    onLoad: PropTypes.func,
}

export default Svg
