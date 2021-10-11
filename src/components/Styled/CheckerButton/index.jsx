import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import Flex from '../../Flex'
import './style'

const StyledCheckerButton = ({
    className,
    isOn,
    children,
    ...rest
}) => (
    <Button
        {...{
            className: cx(
                className,
            ),
            ...rest,
        }}
    >
        <Flex
            {...{
                className: cx(
                    'StyledCheckerButton__frame',
                ),
            }}
        >
            <div
                {...{
                    className: cx(
                        'StyledCheckerButton',
                        isOn && 'StyledCheckerButton__on',
                    ),
                }}
            >
                {children}
            </div>
        </Flex>
    </Button>
)

StyledCheckerButton.propTypes = {
    className: PropTypes.string,
    isOn: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default StyledCheckerButton
