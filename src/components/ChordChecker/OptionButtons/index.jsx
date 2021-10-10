import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import Flex from '../../Flex'
import './style'

const OptionButtons = ({
    reset,
}) => (
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
)

OptionButtons.propTypes = {
    reset: PropTypes.func.isRequired,
}

export default OptionButtons
