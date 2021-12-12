const
    NEWLINE = '\n',
    TABBED_NEWLINE = `${NEWLINE}    `

export const getTextForPuzzle = ({
    board,
}) => (
    JSON.stringify(board)
        .replace(/"/g, '')
        .replace(/:/g, ': ')
        .replace(/{/g, `{ `)
        .replace(/}/g, ` }`)
        .replace(/,/g, ', ')
        .replace(/\[{/g, `[${TABBED_NEWLINE}{`)
        .replace(/}\]/g, `},${NEWLINE}]`)
        .replace(/}, {/g, `},${TABBED_NEWLINE}{`)
)
