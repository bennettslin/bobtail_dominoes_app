import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Svg from '../../../Svg'
import styleConfigFacesPitch from '../../../../styles/faces/pitch'
import './style'

const CheckerFaceSvg = ({
    src,
    reverse,
    faceStyleConfig,
}) => (
    <Svg
        {...{
            className: cx(
                'CheckerFaceSvg',
            ),
            src,
            reverse,
            styleConfig: faceStyleConfig || styleConfigFacesPitch,
        }}
    />
)

CheckerFaceSvg.propTypes = {
    src: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    faceStyleConfig: PropTypes.object,
}

export default CheckerFaceSvg
