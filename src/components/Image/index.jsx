import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Flex from '../Flex'
import './style'

const Image = ({
    className,
    src,
    onLoad = () => {},

}) => (
    <Flex
        {...{
            className: cx(
                'Image',
                className,
            ),
        }}
    >
        <img
            {...{
                src,
                onLoad,
            }}
        />
    </Flex>
)

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    onLoad: PropTypes.func,
}

export default Image
