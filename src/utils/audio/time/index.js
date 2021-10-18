// Each octave lasts a quarter of a second.
const OCTAVE_DURATION_TIME = 0.25

export const getAttackTime = ({
    index,
    pitchSet,
    multiplier = 1,
}) => (
    index * OCTAVE_DURATION_TIME /
    pitchSet.size * multiplier // By ear.
)
