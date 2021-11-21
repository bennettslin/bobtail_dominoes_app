import AiWorker from '../../workers/ai.worker'

let aiWorker

export const refreshAiWorker = () => {
    aiWorker = new AiWorker()
}

export const getAiWorker = () => {
    if (!aiWorker) {
        refreshAiWorker()
    }
    return aiWorker
}
