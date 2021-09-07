import { getMarkdownHeaderFromDate } from '../../../utils/format/markdown'

const date = { year: 2021, month: 7, day: 31 }
export default {
    date,
    title: `Old links`,
    path: `old-links`,
    body: `
${getMarkdownHeaderFromDate(date)}

Temporary content.
    `,
}
