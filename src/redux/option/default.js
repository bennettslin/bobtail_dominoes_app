import { getBoolFromStorage } from '../../utils/storage'
const INITIAL_IS_UPSELL_DISABLED = getBoolFromStorage('isUpsellDisabled')

export const OPTION_DEFAULTS = {
    isUpsellDisabled: INITIAL_IS_UPSELL_DISABLED,

    // Initialise as true if it's not disabled.
    isUpsellShown: !INITIAL_IS_UPSELL_DISABLED,
}
