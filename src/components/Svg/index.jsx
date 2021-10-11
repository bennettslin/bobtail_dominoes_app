import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactInlineSvg from 'react-inlinesvg'
import { getSvgWithDimensions } from './helpers/dimensions'
import { getSvgWithClassStyles } from './helpers/styles'
import './style'

const Svg = ({
    src,
    className,
    reverse,
    scaleFactor,
    styleConfig: {
        className: styleClassName,
        styles,
    } = {},
    onLoad,

}) => {
    const preProcessor = svgString => {
        return getSvgWithClassStyles({
            styleClassName,
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
                className: cx(
                    reverse && 'Svg__reverse',
                    className,
                    styleClassName,
                ),
                preProcessor,
                onLoad,
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
