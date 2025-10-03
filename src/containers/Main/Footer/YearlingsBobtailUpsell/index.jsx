import React from 'react'
import cx from 'classnames'
import Button from '../../../../components/Button'
import Flex from '../../../../components/Flex'
import Markdown from '../../../../components/Markdown'
import PeopleSvg from '../../../../components/Svgs/People'
import bennettLiz from '../../../../assets/svgs/people/bennettLiz'
import { getFormattedText } from '../../../../utils/format'
import { YEARLINGS_BOBTAIL_WEBSITE } from '../../../../constants/website'
import './style'

const YearlingsBobtailUpsell = () => (
    <Button
        dropShadow
        {...{
            className: cx(
                'YearlingsBobtailUpsell',
                'font__text',
            ),
            href: YEARLINGS_BOBTAIL_WEBSITE,
            analyticsLabel: 'yearlingsBobtailUpsell',
        }}
    >
        <Flex>
            <Flex {...{ flexDirection: 'column', gap: 'xxs' }}>
                <Flex {...{ flexDirection: 'column' }}>
                    <Markdown>
                    Please check out…
                    </Markdown>
                    <label
                        {...{
                            className: cx(
                                'font__heading',
                                'fontSize__lg',
                            ),
                        }}
                    >
                        <i>{getFormattedText(`Yearling's Bobtail`)}</i>
                    </label>
                    <Markdown>
                    by the
                    </Markdown>
                    <label
                        {...{
                            className: cx(
                                'YearlingsBobtailUpsell__bandLabel',
                                'font__heading',
                                'fontSize__md',
                            ),
                        }}
                    >
                    Bobtail Yearlings
                    </label>
                    <Markdown>
                    An audio webcomic for
                    </Markdown>
                    <Markdown>
                        {`the "*Ulysses* of rock albums"!`}
                    </Markdown>
                </Flex>
            </Flex>
            <PeopleSvg
                {...{
                    src: bennettLiz,
                    scaleFactor: 0.595,
                }}
            />
        </Flex>
    </Button>
)

export default YearlingsBobtailUpsell
