import React from 'react'
import PropTypes from 'prop-types'
import ReactInlineSvg from 'react-inlinesvg'

const propTypes = {
    src: PropTypes.string.isRequired,
}

const Svg = ({ src }) => (
    <ReactInlineSvg
        {...{
            xmlns: 'http://www.w3.org/2000/svg',
            src,
        }}
    />
)

Svg.propTypes = propTypes

export default Svg
