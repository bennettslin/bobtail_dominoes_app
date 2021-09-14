import React from 'react'
import PropTypes from 'prop-types'
import ReactInlineSvg from 'react-inlinesvg'
import { getDimensions } from './helper'

const Svg = ({
    src,
    setDimensions = () => {},
}) => {
    const preProcessor = svgString => {
        setDimensions(getDimensions(svgString))
        return svgString
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
    setDimensions: PropTypes.func,
}

export default Svg
