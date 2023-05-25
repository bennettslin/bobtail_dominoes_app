export const getUnbrokenEmDashText = text => (
    text.replace(/—/g, '&NoBreak;—')
)
