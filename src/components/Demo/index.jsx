import React from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../hocs/DidMountHoc'
import Flex from '../Flex'
import DemoBody from './Body'
import DemoEngine from './Engine'
import DemoHeader from './Header'
import './style'

const Demo = ({ didMount }) => {
    return (
        <Flex
            {...{
                className: 'Demo',
                // Ensure that menu is not blocked by board movement.
                flexDirection: 'columnReverse',
                alignItems: 'normal',
            }}
        >
            {/* Only render web worker on client side. */}
            {didMount && (
                <DemoEngine />
            )}
            <DemoBody />
            <DemoHeader />
        </Flex>
    )
}

Demo.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(Demo)
