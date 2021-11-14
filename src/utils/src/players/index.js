import playerSita from '../../../assets/svgs/players/playerSita'
import playerBennett from '../../../assets/svgs/players/playerBennett'
import playerCatherine from '../../../assets/svgs/players/playerCatherine'
import playerKhari from '../../../assets/svgs/players/playerKhari'

const PLAYERS = [playerSita, playerBennett, playerCatherine, playerKhari]

export const getPlayerSrc = playerIndex => PLAYERS[playerIndex]
