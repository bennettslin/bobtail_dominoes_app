import { cloneElement } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const StyledButton = ({
    children,
}) => cloneElement(children, {
    className: cx(
        'StyledButton',
        children.props.className,
    ),
})

StyledButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default StyledButton
