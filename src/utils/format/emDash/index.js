export const getUnbrokenEmDashText = text => (
    // Prepend a word joiner, previously called a zero-width no-break space.
    text.replace(/—/g, '\u2060—')
)
