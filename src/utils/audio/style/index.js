import { getFixed, join } from '../../general'
import { getMergedStyles } from '../../svgs'
import styleConfigPlayedOn from '../../../styles/checker/playedOn'
import { OCTAVE_COUNT } from '../../../constants/audio'
import { OCTAVE_DURATION_TIME } from '../time'

const
    TOTAL_DURATION = OCTAVE_DURATION_TIME * OCTAVE_COUNT,
    PATH_CLASS_NAMES = ['edge', 'face']

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

export const getAnimationName = ({
    attacks,
    className,
    pathClassName,
}) => (
    // Name doesn't really matter. It just needs to be unique.
    join([
        className,
        pathClassName,
        join([
            getFixed(attacks[0]).replace('.', ''),
            attacks.length,
        ], '_'),
    ], '_')
)

const getStyleFromConfig = (
    styleConfig,
    pathClassName,
) => styleConfig.styles.fill[pathClassName]

export const getKeyframesSequence = ({
    attacks,
    styleConfig,
    pathClassName,
    playedConfigEntity,
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
        attacks = getNestedAttacks(playedConfigEntity)

    return {
        className: getAnimationName({ attacks, className }),
        keyframes: PATH_CLASS_NAMES.map(pathClassName => ({
            animationName: getAnimationName({
                attacks,
                className,
                pathClassName,
            }),
            sequence: getKeyframesSequence({
                attacks,
                styleConfig,
                pathClassName,
                playedConfigEntity,
            }),
        })),
        styles: getMergedStyles([
            {
                animation: PATH_CLASS_NAMES.reduce((config, pathClassName) => {
                    const animationName = getAnimationName({
                        attacks,
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
