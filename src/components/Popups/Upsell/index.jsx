import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../../hocs/DidMountHoc'
// import FollowButtons from '../../FollowButtons'
import MailingList from '../../MailingList'
import Popup from '../../Popup'
import UpsellDisableLink from './DisableLink'
import { updateIsUpsellShown } from '../../../redux/option/action'
import { mapIsUpsellShown } from '../../../redux/option/selector'

const UpsellPopup = ({ didMount }) => {
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
                isVisible: didMount && isUpsellShown,
                handleCloseClick,
            }}
        >
            <MailingList />
            {/* <FollowButtons /> */}
            <UpsellDisableLink />
        </Popup>
    )
}

UpsellPopup.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(UpsellPopup)
