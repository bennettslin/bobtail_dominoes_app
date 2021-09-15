import React from 'react'
import PropTypes from 'prop-types'
import ReactInlineSvg from 'react-inlinesvg'
import { getSvgWithDimensions } from './helper'

const Svg = ({
    src,
    inlineDimensions,
    scaleFactor = 1,
}) => {
    const preProcessor = svgString => {
        return (
            inlineDimensions ?
                getSvgWithDimensions({ svgString, scaleFactor }) :
                svgString
        )
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
    inlineDimensions: PropTypes.bool,
    scaleFactor: PropTypes.number,
}

export default Svg
