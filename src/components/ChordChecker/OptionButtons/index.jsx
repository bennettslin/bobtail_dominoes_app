import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import StyledCheckerButton from '../../Styled/CheckerButton'
import StyledPlatform from '../../Styled/Platform'
import Flex from '../../Flex'
import DominoSvg from '../../Svgs/Domino'
import cPitchButton from '../../../assets/svgs/chords/cPitchButton'
import './style'

const OptionButtons = ({
    reset,
}) => (
    <StyledPlatform>
        <Flex
            {...{
                className: cx(
                    'OptionButtons',
                ),
            }}
        >
            <StyledCheckerButton
                {...{
                    className: cx(
                        'OptionButtons__reset',
                    ),
                    handleButtonClick: reset,
                }}
            >
                <DominoSvg
                    {...{
                        src: cPitchButton,
                        isFigure: false,
                    }}
                />
            </StyledCheckerButton>
        </Flex>
    </StyledPlatform>
)

OptionButtons.propTypes = {
    reset: PropTypes.func.isRequired,
}

export default OptionButtons
