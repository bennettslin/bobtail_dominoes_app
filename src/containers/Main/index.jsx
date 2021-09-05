import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Content from './Content'
import Footer from './Footer'
import './style'

const Main = ({ children }) => (
    <div
        {...{
            className: cx(
                'Main',
            ),
        }}
    >
        <Content>{children}</Content>
        <Footer />
    </div>
)

Main.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Main
