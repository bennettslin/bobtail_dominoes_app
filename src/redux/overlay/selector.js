import { createSelector } from 'reselect'
import { mapIsUpsellShown } from '../option/selector'

export const mapIsOverlayShown = createSelector(
    mapIsUpsellShown,
    (
        isUpsellShown,
    ) => isUpsellShown,
)
