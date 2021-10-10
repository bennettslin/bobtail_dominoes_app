import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import StyledPlatform from '../../Styled/Platform'
import Flex from '../../Flex'
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
            <Button
                {...{
                    className: cx(
                        'OptionButtons__reset',
                    ),
                    handleButtonClick: reset,
                }}
            >
                reset
            </Button>
        </Flex>
    </StyledPlatform>
)

OptionButtons.propTypes = {
    reset: PropTypes.func.isRequired,
}

export default OptionButtons
