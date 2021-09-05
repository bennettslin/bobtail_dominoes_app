import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Popup from '../../Popup'
import FollowButtons from '../../FollowButtons'
import MailingList from '../../MailingList'
import UpsellDisableLink from './DisableLink'
import { updateIsUpsellShown } from '../../../redux/option/action'
import { mapIsUpsellShown } from '../../../redux/option/selector'

const UpsellPopup = () => {
    const
        dispatch = useDispatch(),
        isUpsellShown = useSelector(mapIsUpsellShown)

    const handleCloseClick = () => {
        dispatch(updateIsUpsellShown())
    }

    return (
        <Popup
            {...{
                popupName: 'UpsellPopup',
                isVisible: isUpsellShown,
                handleCloseClick,
            }}
        >
            <MailingList />
            <FollowButtons />
            <UpsellDisableLink />
        </Popup>
    )
}

export default UpsellPopup
