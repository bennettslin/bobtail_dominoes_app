import playerSita from '../../../assets/svgs/people/playerSita'
import playerBennett from '../../../assets/svgs/people/playerBennett'
import playerCatherine from '../../../assets/svgs/people/playerCatherine'
import playerKhari from '../../../assets/svgs/people/playerKhari'

const PLAYERS = [playerSita, playerBennett, playerCatherine, playerKhari]

export const getPlayerSrc = playerIndex => PLAYERS[playerIndex]
