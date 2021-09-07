import React from 'react'
import { useDispatch } from 'react-redux'
import Anchor from '../../../Anchor'
import { updateIsUpsellDisabled } from '../../../../redux/option/action'
import { replaceStraightWithSmartQuotes } from '../../../../utils/format/smartQuote'

const UpsellDisableLink = () => {
    const dispatch = useDispatch()

    const handleAnchorClick = () => {
        dispatch(updateIsUpsellDisabled(true))
    }

    return (
        <div {...{ className: 'UpsellDisableLink' }}>
            <Anchor
                {...{
                    analyticsLabel: `UpsellPopup__disableUpsell`,
                    handleAnchorClick,
                }}
            >
                {replaceStraightWithSmartQuotes(`Don't show this popup again`)}
            </Anchor>
        </div>
    )
}

export default UpsellDisableLink
