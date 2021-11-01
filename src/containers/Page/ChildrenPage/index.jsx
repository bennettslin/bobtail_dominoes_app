import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../components/Flex'
import { mapIsFullPage } from '../../../redux/page/selector'
import './style'

const ChildrenPage = ({ className, children }) => {
    const isFullPage = useSelector(mapIsFullPage)

    return (
        <Flex
            {...{
                className: cx(
                    'ChildrenPage',
                    isFullPage && 'ChildrenPage__fullPage',
                    className,
                ),
                flexGrow: 1,
                flexDirection: 'column',
            }}
        >
            {children}
        </Flex>
    )
}

ChildrenPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default ChildrenPage
