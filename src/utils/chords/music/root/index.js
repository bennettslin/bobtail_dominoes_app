import { FLAT, SHARP } from '../../../../constants/music'

export const ROOT_NOTES = [
    'C',
    `C${SHARP}/D${FLAT}`,
    'D',
    `D${SHARP}/E${FLAT}`,
    'E',
    'F',
    `F${SHARP}/G${FLAT}`,
    'G',
    `G${SHARP}/A${FLAT}`,
    'A',
    `A${SHARP}/B${FLAT}`,
    'B',
]

export const getRootLabel = (root = -1) => (
    root > -1 && root < 12 ? ROOT_NOTES[root] : null
)
