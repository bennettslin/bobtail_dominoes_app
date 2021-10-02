import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const StyledPage = ({ className, showTabbedMenu, ...rest }) => (
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
                    showTabbedMenu && 'StyledPage__body__tabbedMenu',
                    className,
                ),
                ...rest,
            }}
        />
    </div>
)

StyledPage.propTypes = {
    className: PropTypes.string,
    showTabbedMenu: PropTypes.bool,
}

export default StyledPage
