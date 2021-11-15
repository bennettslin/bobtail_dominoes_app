import allPeople from './allPeople'
import bennettLiz from './bennettLiz'
import catherine from './catherine'
import khari from './khari'
import { getMergedStyles } from '../../utils/svgs'

export default {
    className: 'people',
    styles: getMergedStyles([
        allPeople,
        bennettLiz,
        catherine,
        khari,
    ]),
}
