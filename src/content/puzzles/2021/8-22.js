import { getMarkdownHeaderFromDate } from '../../../utils/format/markdown'

const date = { year: 2021, month: 8, day: 22 }
export default {
    date,
    title: `Yes, music is getting worse`,
    path: `music-getting-worse`,
    body: `
${getMarkdownHeaderFromDate(date)}

Temporary content again.
    `,
}
