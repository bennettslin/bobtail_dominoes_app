const getDirectionPageConfig = ({ id, date }) => ({
    ...id && { id },
    ...date && { date },
})

const getDirectionPage = ({
    direction,
    configs,
    index,

}) => {
    if (direction === -1 && index > 0) {
        return getDirectionPageConfig(configs[index - 1])
    } else if (direction === 1 && index < configs.length - 1) {
        return getDirectionPageConfig(configs[index + 1])
    }
}

export const addDirectionPages = configs => (
    configs.map((config, index) => {
        const
            directionLeftPage = getDirectionPage({
                direction: -1,
                configs,
                index,
            }),
            directionRightPage = getDirectionPage({
                direction: 1,
                configs,
                index,
            })

        return {
            ...config,
            ...directionLeftPage && { directionLeftPage },
            ...directionRightPage && { directionRightPage },
        }
    })
)
