export const getPagesMapFromContents = contents => {
    return (
        contents.reduce((map, content) => {
            const {
                date: {
                    year,
                    month,
                    day,
                },
                title,
                path,
            } = content

            if (!map[year]) {
                map[year] = {}
            }

            if (!map[year][month]) {
                map[year][month] = {}
            }

            // This assumes only one page per date.
            map[year][month][day] = {
                title,
                path,
            }

            return map
        }, {})
    )
}
