import React from 'react'
import PropTypes from 'prop-types'
import ReactInlineSvg from 'react-inlinesvg'
import { getSvgWithDimensions } from './helpers/dimensions'
import { getSvgWithClassStyles } from './helpers/styles'

const Svg = ({
    src,
    scaleFactor,
    styles,
}) => {
    const preProcessor = svgString => {
        return getSvgWithClassStyles({
            svgString: getSvgWithDimensions({
                svgString,
                scaleFactor,
            }),
            styles,
        })
    }

    return (
        <ReactInlineSvg
            {...{
                xmlns: 'http://www.w3.org/2000/svg',
                src,
                preProcessor,
            }}
        />
    )
}

Svg.propTypes = {
    src: PropTypes.string.isRequired,
    scaleFactor: PropTypes.number,
    styles: PropTypes.shape({
        fill: PropTypes.object,
    }),
}

export default Svg
