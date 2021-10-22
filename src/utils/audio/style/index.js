import { getFixed, join } from '../../general'
import { getMergedStyles } from '../../svgs'
import styleConfigPlayedOn from '../../../styles/checker/playedOn'
import { OCTAVE_COUNT } from '../../../constants/audio'
import { OCTAVE_DURATION_TIME } from '../time'

const
    TOTAL_DURATION = OCTAVE_DURATION_TIME * OCTAVE_COUNT,
    PATH_CLASS_NAMES = ['edge', 'face']

const getSoundFromEntity = ({ attack, duration }) => ({
    attack, duration,
})

export const getSounds = configEntity => {
    if (!configEntity) {
        return null
    }
    if (Number.isFinite(configEntity.attack)) {
        return [getSoundFromEntity(configEntity)]
    }
    return Object.values(configEntity).map(entity => {
        return getSoundFromEntity(entity)
    })
}

export const getAnimationName = ({
    sounds,
    className,
    pathClassName,
}) => (
    // Name doesn't really matter. It just needs to be unique.
    join([
        className,
        pathClassName,
        join([
            getFixed(sounds[0].attack).replace('.', ''),
            sounds.length,
        ], '_'),
    ], '_')
)

const getStyleFromConfig = (
    styleConfig,
    pathClassName,
) => styleConfig.styles.fill[pathClassName]

export const getKeyframesSequence = ({
    styleConfig,
    pathClassName,
}) => {
    const
        defaultStyle = getStyleFromConfig(styleConfig, pathClassName),
        playedStyle = getStyleFromConfig(styleConfigPlayedOn, pathClassName)

    return [
        {
            percentage: 0,
            fillStyle: defaultStyle,
        },
        {
            percentage: 20,
            fillStyle: playedStyle,
        },
        {
            percentage: 40,
            fillStyle: defaultStyle,
        },
        {
            percentage: 60,
            fillStyle: playedStyle,
        },
        {
            percentage: 80,
            fillStyle: defaultStyle,
        },
        {
            percentage: 100,
            fillStyle: playedStyle,
        },
    ]
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
        sounds = getSounds(playedConfigEntity)

    return {
        className: getAnimationName({ sounds, className }),
        keyframes: PATH_CLASS_NAMES.map(pathClassName => ({
            animationName: getAnimationName({
                sounds,
                className,
                pathClassName,
            }),
            sequence: getKeyframesSequence({
                styleConfig,
                pathClassName,
            }),
        })),
        styles: getMergedStyles([
            {
                animation: PATH_CLASS_NAMES.reduce((config, pathClassName) => {
                    const animationName = getAnimationName({
                        sounds,
                        className,
                        pathClassName,
                    })
                    config[pathClassName] = join([
                        animationName,
                        `${TOTAL_DURATION}s`,
                    ], ' ')
                    return config
                }, {}),
            },
            styles,
        ]),
    }
}
