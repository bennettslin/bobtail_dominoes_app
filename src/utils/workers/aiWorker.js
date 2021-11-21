import AiWorker from '../../workers/ai.worker'

let aiWorker = null

export const terminateAiWorker = () => {
    aiWorker.terminate()
    aiWorker = null
}

export const getAiWorker = () => {
    if (!aiWorker) {
        aiWorker = new AiWorker()
    }
    return aiWorker
}
