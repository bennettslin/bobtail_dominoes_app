import AiWorker from '../workers/ai.worker'

let aiWorker = null

const getInitialisedAiWorker = () => {
    aiWorker = new AiWorker()
    return aiWorker
}

export const terminateAiWorker = () => {
    if (aiWorker) {
        aiWorker.terminate()
        aiWorker = null
    }
}

export const getAiWorker = () => aiWorker || getInitialisedAiWorker()
