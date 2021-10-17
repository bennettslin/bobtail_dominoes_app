import { OPTION_STORE } from './reducer'

export const mapIsUpsellDisabled = (
    { [OPTION_STORE]: { isUpsellDisabled } },
) => isUpsellDisabled

export const mapIsUpsellShown = (
    { [OPTION_STORE]: { isUpsellShown } },
) => isUpsellShown
