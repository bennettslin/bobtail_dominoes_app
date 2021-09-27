import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const StyledPage = ({ className, ...rest }) => (
    <div
        {...{
            className: cx(
                'StyledPage',
            ),
        }}
    >
        <Flex
            {...{
                className: cx(
                    'StyledPage__body',
                    className,
                ),
                ...rest,
            }}
        />
    </div>
)

StyledPage.propTypes = {
    className: PropTypes.string,
}

export default StyledPage
