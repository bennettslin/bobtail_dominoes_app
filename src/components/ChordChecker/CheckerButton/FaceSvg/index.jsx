import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Svg from '../../../Svg'
import styleConfigFaces from '../../../../styles/checker/faces'
import './style'

const CheckerFaceSvg = ({
    src,
    reverse,
}) => (
    <Svg
        {...{
            className: cx(
                'CheckerFaceSvg',
            ),
            src,
            reverse,
            styleConfig: styleConfigFaces,
        }}
    />
)

CheckerFaceSvg.propTypes = {
    src: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
}

export default CheckerFaceSvg
