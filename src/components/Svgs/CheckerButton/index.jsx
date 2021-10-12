import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import Svg from '../../Svg'
import button from '../../../assets/svgs/chords/button'
import buttonClicked from '../../../assets/svgs/chords/buttonClicked'
import './style'

const CheckerButtonSvg = ({
    className,
    isClicked,
    styleConfig,
}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <Flex
            {...{
                className: cx(
                    'CheckerButtonSvg',
                    [
                        'hidden',
                        isLoaded && 'shown',
                    ],
                ),
            }}
        >
            <Svg
                {...{
                    className,
                    src: isClicked ? buttonClicked : button,
                    styleConfig,
                    onLoad: () => setIsLoaded(true),
                }}
            />
        </Flex>
    )
}

CheckerButtonSvg.propTypes = {
    className: PropTypes.string,
    isClicked: PropTypes.bool,
    styleConfig: PropTypes.shape({
        className: PropTypes.string.isRequired,
        styles: PropTypes.object.isRequired,
    }),
}

export default CheckerButtonSvg
