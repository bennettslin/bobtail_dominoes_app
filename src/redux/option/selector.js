import { OPTION_STORE } from '../../constants/store'

export const mapIsUpsellDisabled = (
    { [OPTION_STORE]: { isUpsellDisabled } },
) => isUpsellDisabled

export const mapIsUpsellShown = (
    { [OPTION_STORE]: { isUpsellShown } },
) => isUpsellShown
