import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import StyledPlatform from '../../Styled/Platform'
import Flex from '../../Flex'
import ResetButton from './ResetButton'
import './style'

const OptionButtons = () => (
    <StyledPlatform>
        <Flex
            {...{
                className: cx(
                    'OptionButtons',
                ),
            }}
        >
            <ResetButton />
        </Flex>
    </StyledPlatform>
)

OptionButtons.propTypes = {
    reset: PropTypes.func.isRequired,
}

export default OptionButtons
