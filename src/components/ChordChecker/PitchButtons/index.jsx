import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import Flex from '../../Flex'
import CheckerPitchButton from './PitchButton'
import { mapCurrentPitchSet } from '../../../redux/chords/selector'
import { getArrayOfPitches } from '../../../utils/chords/math'
import './style'

const CheckerPitchButtons = ({
    onClick,
    reset,

}) => {
    const currentPitchSet = useSelector(mapCurrentPitchSet)

    return (
        <Flex
            {...{
                className: cx(
                    'CheckerDisplay',
                ),
            }}
        >
            {getArrayOfPitches().map(pitch => (
                <CheckerPitchButton
                    {...{
                        key: pitch,
                        pitch,
                        isOn: currentPitchSet.has(pitch),
                        onClick,
                    }}
                />
            ))}
            <Button
                {...{
                    handleButtonClick: reset,
                }}
            >
                reset
            </Button>
        </Flex>
    )
}

CheckerPitchButtons.propTypes = {
    onClick: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
}

export default CheckerPitchButtons
