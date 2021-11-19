import playerSita from '../../../assets/svgs/people/playerSita'
import playerBennett from '../../../assets/svgs/people/playerBennett'
import playerCatherine from '../../../assets/svgs/people/playerCatherine'
import playerKhari from '../../../assets/svgs/people/playerKhari'
import {
    PLAYER_BENNETT,
    PLAYER_CATHERINE,
    PLAYER_KHARI,
    PLAYER_SITA,
} from '../../../constants/music/play'

const PLAYERS_MAP = {
    [PLAYER_SITA]: playerSita,
    [PLAYER_BENNETT]: playerBennett,
    [PLAYER_CATHERINE]: playerCatherine,
    [PLAYER_KHARI]: playerKhari,
}

export const getPlayerSrc = player => PLAYERS_MAP[player]
