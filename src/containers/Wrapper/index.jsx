import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../components/Flex'
import Popups from '../../components/Popups'
import Main from '../Main'

const Wrapper = ({ children }) => (
    <Flex
        {...{
            className: cx(
                'Wrapper',
            ),
            flexGrow: 1,
            flexDirection: 'column-reverse',
        }}
    >
        <Main>{children}</Main>
        <Popups />
    </Flex>
)

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrapper
