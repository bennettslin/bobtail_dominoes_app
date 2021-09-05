import { getBoolFromStorage } from '../../utils/storage'
const INITIAL_IS_UPSELL_DISABLED = getBoolFromStorage('isUpsellDisabled')

export const getOptionDefaults = () => ({
    isUpsellDisabled: INITIAL_IS_UPSELL_DISABLED,
    isUpsellShown: true,
})
