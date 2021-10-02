import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const StyledPage = ({ className, showTabbedMenu, ...rest }) => (
    <Flex
        {...{
            className: cx(
                'StyledPage',
            ),
            justifyContent: 'normal',
            alignItems: 'normal',
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
    </Flex>
)

StyledPage.propTypes = {
    className: PropTypes.string,
    showTabbedMenu: PropTypes.bool,
}

export default StyledPage
