import React from 'react'
import { useDispatch } from 'react-redux'
import Anchor from '../../../Anchor'
import { updateIsUpsellDisabled } from '../../../../redux/option/action'
import { getSmartQuotedText } from '../../../../utils/format/smartQuote'

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
                {getSmartQuotedText(`Don't show this popup again`)}
            </Anchor>
        </div>
    )
}

export default UpsellDisableLink
