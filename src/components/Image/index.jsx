import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import './style'

const Image = ({
    className,
    src,
    onLoad = () => {},

}) => (
    <img
        {...{
            className: cx(
                'Image',
                className,
            ),
            src,
            onLoad,
        }}
    />
)

Image.propTypes = {
    className: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    onLoad: PropTypes.func,
}

export default Image
