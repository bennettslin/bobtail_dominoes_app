import React from 'react'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import './style'

const AppFooter = () => (
    <Flex
        {...{
            className: cx(
                'AppFooter',
                'text__light',
            ),
        }}
    >
        {`© ${new Date().getFullYear()} Dogies Almondine`}
    </Flex>
)

export default AppFooter
