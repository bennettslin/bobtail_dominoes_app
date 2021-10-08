const PITCH_COUNT = 12

export const mod12 = number => (
    (number + PITCH_COUNT) % PITCH_COUNT
)

export const getArrayOfPitches = () => (
    Array.from({ length: PITCH_COUNT }, (v, i) => i)
)
