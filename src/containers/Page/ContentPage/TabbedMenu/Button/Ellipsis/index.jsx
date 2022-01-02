import React from 'react'
import cx from 'classnames'
import StyledTabButton from '../../../../../../components/Styled/TabButton'
import StyledButtonText from '../../../../../../components/Styled/ButtonText'
import './style'

const TabbedMenuEllipsis = () => (
    <StyledTabButton
        disabled
        {...{
            className: cx(
                'TabbedMenuEllipsis',
                'font__button',
                'fontSize__md',
            ),
        }}
    >
        <StyledButtonText disabled>
            …
        </StyledButtonText>
    </StyledTabButton>
)

export default TabbedMenuEllipsis
