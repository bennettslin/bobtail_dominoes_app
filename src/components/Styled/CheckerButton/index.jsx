import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import Svg from '../../Svg'
import CheckerButtonSvg from '../../Svgs/CheckerButton'
import styleConfigFaces from '../../../styles/checker/faces'
import styleConfigPitch from '../../../styles/checker/pitch'
import styleConfigPitchOn from '../../../styles/checker/pitchOn'
import './style'

const StyledCheckerButton = ({
    className,
    faceSrc,
    isOn,
    styleConfig,
    style,
    ...rest
}) => (
    <div
        {...{
            className: cx(
                className,
            ),
            style,
        }}
    >
        <Flex
            {...{
                className: cx(
                    'StyledCheckerButton__frame',
                ),
            }}
        >
            <button
                {...{
                    className: cx(
                        'StyledCheckerButton',
                        isOn && 'StyledCheckerButton__on',
                    ),
                    ...rest,
                }}
            >
                <div
                    {...{
                        className: cx(
                            'StyledCheckerButton__animatable',
                        ),
                    }}
                >
                    <CheckerButtonSvg
                        {...{
                            isOn,
                            className: cx(
                                'StyledCheckerButton__button',
                            ),
                            styleConfig: styleConfig || (
                                isOn ? styleConfigPitchOn : styleConfigPitch
                            ),
                        }}
                    />
                    <Svg
                        {...{
                            className: cx(
                                'StyledCheckerButton__face',
                            ),
                            src: faceSrc,
                            styleConfig: styleConfigFaces,
                        }}
                    />
                </div>
            </button>
        </Flex>
    </div>
)

StyledCheckerButton.propTypes = {
    className: PropTypes.string,
    faceSrc: PropTypes.string.isRequired,
    isOn: PropTypes.bool,
    styleConfig: PropTypes.object,
    style: PropTypes.object,
}

export default StyledCheckerButton
