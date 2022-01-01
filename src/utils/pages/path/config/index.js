import { join } from '../../../general'

export const getPagePathFromConfig = ({
    topLevelPage,
    id,
    date: { year, month, day } = {},
}) => (
    join([
        topLevelPage,
        year,
        month,
        day,
        id,
    ], '/')
)
