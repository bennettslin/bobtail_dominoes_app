import React from 'react'
import cx from 'classnames'
import './style'

const SubFooter = () => (
    <div
        {...{
            className: cx(
                'SubFooter',
            ),
        }}
    >
        {`© ${new Date().getFullYear()} Dogies Almondine Records`}
    </div>
)

export default SubFooter
