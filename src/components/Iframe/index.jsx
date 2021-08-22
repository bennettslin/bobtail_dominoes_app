import React, { forwardRef } from 'react'
import cx from 'classnames'
import './style'

const Iframe = forwardRef((props, ref) => (
    <iframe
        {...{
            ref,
            className: cx(
                'Iframe',
            ),
            tabIndex: -1,
        }}
    />
))

export default Iframe
