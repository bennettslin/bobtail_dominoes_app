import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Flex from '../../Flex'
import Svg from '../../Svg'
import styleConfigPeople from '../../../styles/people'
import './style'

const PeopleSvg = ({
    src,
    className,
    styleConfig = styleConfigPeople,
    ...rest
}) => (
    <Flex
        {...{
            className: cx(
                className,
            ),
        }}
    >
        <Svg
            {...{
                className: cx(
                    'PeopleSvg',
                ),
                src,
                styleConfig,
                ...rest,
            }}
        />
    </Flex>
)

PeopleSvg.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    styleConfig: PropTypes.shape({
        className: PropTypes.string.isRequired,
        styles: PropTypes.object.isRequired,
    }),
}

export default PeopleSvg
