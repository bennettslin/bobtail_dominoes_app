import { cloneElement } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledTabButton = ({
    children,
}) => cloneElement(children, {
    className: cx(
        'StyledTabButton',
        children.props.className,
    ),
})

StyledTabButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default StyledTabButton
