import { setBoolInStorage } from '../../utils/storage'
import { OPTION_STORE } from '../../constants/store'

export const updateIsUpsellDisabled = isUpsellDisabled => {
    setBoolInStorage('isUpsellDisabled', isUpsellDisabled)

    return {
        type: OPTION_STORE,
        payload: { isUpsellDisabled },
    }
}

export const updateIsUpsellShown = (isUpsellShown = false) => ({
    type: OPTION_STORE,
    payload: { isUpsellShown },
})
