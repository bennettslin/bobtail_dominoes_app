import { createSelector } from 'reselect'
import { OPTION_STORE } from '../../constants/store'

export const mapIsUpsellDisabled = (
    { [OPTION_STORE]: { isUpsellDisabled } },
) => isUpsellDisabled

export const mapIsUpsellShown = createSelector(
    mapIsUpsellDisabled,
    ({ [OPTION_STORE]: { isUpsellShown } }) => isUpsellShown,
    (
        isUpsellDisabled,
        isUpsellShown,
    ) => !isUpsellDisabled && isUpsellShown,
)
