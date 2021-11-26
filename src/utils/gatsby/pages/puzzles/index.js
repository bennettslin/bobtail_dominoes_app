import puzzles from '../../../../content/puzzles'

export default puzzles.map(({
    year,
    month,
    day,
}) => ({
    path: `puzzles/${year}/${month}-${day}`,
    context: {
        pageMap: {
            id: 'Blah',
            date: {
                year, month, day,
            },
            pathDate: {
                year, month, day,
            },
        },
        content: `Friday puzzle content.`,
    },
}))
