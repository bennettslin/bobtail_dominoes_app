import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ValidIcon from './ValidIcon'
import StyledPlatform from '../../Styled/Platform'
import CheckerPitchButton from './PitchButton'
import { mapCurrentPitchSet } from '../../../redux/chords/selector'
import { getArrayOfPitches } from '../../../utils/chords/math'
import './style'

const CheckerPitchButtons = ({
    onClick,

}) => {
    const currentPitchSet = useSelector(mapCurrentPitchSet)

    return (
        <StyledPlatform>
            <div
                {...{
                    className: cx(
                        'CheckerPitchButtons',
                    ),
                }}
            >
                <div
                    {...{
                        className: cx(
                            'CheckerPitchButtons__buttons',
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
                    <ValidIcon />
                </div>
            </div>
        </StyledPlatform>
    )
}

CheckerPitchButtons.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default CheckerPitchButtons
