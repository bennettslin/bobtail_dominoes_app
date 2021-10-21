import { OCTAVE_COUNT } from '../../../constants/audio'
import { getFixed } from '../../general'
import { getMergedStyles } from '../../svgs'
import { OCTAVE_DURATION_TIME } from '../time'
import styleConfigPlayedOn from '../../../styles/checker/playedOn'

const
    TOTAL_DURATION = OCTAVE_DURATION_TIME * OCTAVE_COUNT,
    {
        styles: {
            fill: {
                edge: PLAYED_EDGE_STYLE,
                face: PLAYED_FACE_STYLE,
            },
        },
    } = styleConfigPlayedOn

export const getNestedAttacks = configEntity => {
    if (!configEntity) {
        return null
    }
    if (Number.isFinite(configEntity.attack)) {
        return [configEntity.attack]
    }
    return Object.values(configEntity).map(entity => {
        return entity.attack
    })
}

export const getAnimationName = (attacks, className) => (
    // Name doesn't really matter. It just needs to be unique.
    [
        className,
        [getFixed(attacks[0]).replace('.', ''), attacks.length].join('_'),
    ].join('_')
)

// TODO: Return object.
export const getKeyframes = (attacks, styleConfig, playedConfigEntity) => {
    console.log('playedConfigEntity', playedConfigEntity, styleConfig)
    const { styles: { fill: { face, edge } } } = styleConfig
    return (
        `{ 0% { fill: ${face}; } 20% { fill: ${PLAYED_FACE_STYLE}; } 40% { fill: ${face}; } 60% { fill: ${PLAYED_FACE_STYLE}; } 80% { fill: ${face}; } 100% { fill: ${PLAYED_FACE_STYLE}; } }`
    )
}

export const getAnimatedStyleConfig = (
    styleConfig,
    playedConfigEntity,
) => {
    if (!playedConfigEntity) {
        return styleConfig
    }

    const
        { className, styles } = styleConfig,
        attacks = getNestedAttacks(playedConfigEntity),
        animationName = getAnimationName(attacks, className)

    return {
        className: [className, animationName].join(''),
        keyframes: [
            animationName,
            getKeyframes(attacks, styleConfig, playedConfigEntity),
        ].join(' '),
        styles: getMergedStyles([
            {
                animation: {
                    edge: `${animationName} ${TOTAL_DURATION}s`,
                    face: `${animationName} ${TOTAL_DURATION}s`,
                },
            },
            styles,
        ]),
    }
}
