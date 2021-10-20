import board from './board'
import figures from './figures'
import logo from './logo'
import pitches from './pitches'
import { getMergedStyles } from '../../utils/svgs'

export default {
    className: 'dominoes',
    styles: getMergedStyles([
        board,
        figures,
        logo,
        pitches,
    ]),
}
