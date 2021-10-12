import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import Button from '../../Button'
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
            <Button
                {...{
                    className: cx(
                        'StyledCheckerButton',
                        isOn ?
                            'StyledCheckerButton__on' :
                            'StyledCheckerButton__off',
                    ),
                    ...rest,
                }}
            >
                <CheckerButtonSvg
                    isClicked
                    {...{
                        key: isOn,
                        className: cx(
                            'StyledCheckerButton__child',
                            'StyledCheckerButton__button__clicked',
                        ),
                        styleConfig: styleConfig || (
                            isOn ? styleConfigPitchOn : styleConfigPitch
                        ),
                    }}
                />
                <CheckerButtonSvg
                    {...{
                        key: isOn,
                        className: cx(
                            'StyledCheckerButton__child',
                            'StyledCheckerButton__button__unclicked',
                        ),
                        styleConfig: styleConfig || (
                            isOn ? styleConfigPitchOn : styleConfigPitch
                        ),
                    }}
                />
                <Svg
                    {...{
                        className: cx(
                            'StyledCheckerButton__child',
                            'StyledCheckerButton__face',
                        ),
                        src: faceSrc,
                        styleConfig: styleConfigFaces,
                    }}
                />
            </Button>
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
