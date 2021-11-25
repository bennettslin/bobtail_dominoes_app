import AiWorker from '../../workers/ai.worker'

let aiWorker = null

export const terminateAiWorker = () => {
    if (aiWorker) {
        aiWorker.terminate()
        aiWorker = null
    }
}

export const getAiWorker = () => {
    if (!aiWorker) {
        aiWorker = new AiWorker()
    }
    return aiWorker
}
