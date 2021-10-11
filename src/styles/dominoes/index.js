import board from './board'
import figures from './figures'
import logo from './logo'
import pitches from './pitches'
import { getStyleConfig } from '../../utils/svgs'

export default getStyleConfig(
    'dominoes',
    [
        board,
        figures,
        logo,
        pitches,
    ],
)
