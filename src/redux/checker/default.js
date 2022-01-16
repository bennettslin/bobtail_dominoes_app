import { getBoolFromStorage } from '../../utils/storage'
export const QUEUE_CHECKER_PLAY = 'queueCheckerPlay'
export const TOGGLE_CHECKER_PITCH = 'toggleCheckerPitch'
export const TRANSPOSE_CHECKER_PITCH_SET = 'transposeCheckerPitchSet'

const INITIAL_IS_CHECKER_AUTOPLAY_ON = getBoolFromStorage('isCheckerAutoplayOn')

export const CHECKER_DEFAULT = {
    isCheckerAutoplayOn: INITIAL_IS_CHECKER_AUTOPLAY_ON,
    checkerPitchSet: new Set(),
    checkerPitchConfigs: null,
}
