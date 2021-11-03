import AiWorker from '../../workers/ai.worker'
import { getIsServerSide } from '../../utils/browser'

const aiWorker = !getIsServerSide() && new AiWorker()

export default aiWorker
