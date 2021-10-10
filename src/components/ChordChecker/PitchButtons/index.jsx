import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
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
        <div
            {...{
                className: cx(
                    'CheckerPitchButtons',
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
                    className: cx(
                        'CheckerPitchButtons__reset',
                    ),
                    handleButtonClick: reset,
                }}
            >
                reset
            </Button>
        </div>
    )
}

CheckerPitchButtons.propTypes = {
    onClick: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
}

export default CheckerPitchButtons
