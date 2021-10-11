import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import Svg from '../../Svg'
import checkerButton from '../../../assets/svgs/chords/checkerButton'
import checkerButtonOn from '../../../assets/svgs/chords/checkerButtonOn'
import './style'

const CheckerButtonSvg = ({
    className,
    isOn,
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
                    key: isOn,
                    src: isOn ? checkerButtonOn : checkerButton,
                    className,
                    styleConfig,
                    onLoad: () => setIsLoaded(true),
                }}
            />
        </Flex>
    )
}

CheckerButtonSvg.propTypes = {
    className: PropTypes.string,
    isOn: PropTypes.bool,
    styleConfig: PropTypes.shape({
        className: PropTypes.string.isRequired,
        styles: PropTypes.object.isRequired,
    }),
}

export default CheckerButtonSvg
