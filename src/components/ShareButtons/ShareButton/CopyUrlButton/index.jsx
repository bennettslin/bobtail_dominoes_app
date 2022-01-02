import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import Svg from '../../../Svg'
import ShareButton from '..'
import copyUrl from '../../../../assets/svgs/socialMedia/copyUrl'
import copyUrlCopied from '../../../../assets/svgs/socialMedia/copyUrlCopied'
import { mapSelectedPagePath } from '../../../../redux/page/selector'
import { getUrlForPath } from '../../../../utils/pages/path/url'
import { COPY_URL_KEY } from '../../../../constants/socialMedia'

const TOOLTIP_TEXT = 'link copied!'

const CopyUrlButton = () => {
    const
        buttonRef = useRef(),
        copiedUrlRef = useRef(),
        selectedPagePath = useSelector(mapSelectedPagePath),
        [isCopied, setIsCopied] = useState(false),
        [copyTimeoutId, setCopyTimeoutId] = useState(-1)

    copiedUrlRef.current = isCopied

    const resetCopiedUrlKey = () => {
        if (copiedUrlRef.current) {
            setIsCopied(false)
        }
    }

    const handleButtonClick = () => {
        navigator.clipboard.writeText(getUrlForPath(selectedPagePath))

        clearTimeout(copyTimeoutId)
        setIsCopied(true)

        setCopyTimeoutId(setTimeout(
            resetCopiedUrlKey,
            1500,
        ))
    }

    useEffect(() => {
        if (isCopied) {
            ReactTooltip.show(buttonRef.current)
        } else {
            ReactTooltip.hide(buttonRef.current)
        }
    }, [isCopied])

    return (
        <ShareButton
            isTooltipSuccess
            {...{
                ref: buttonRef,
                className: cx(
                    'CopyUrlButton',
                ),
                id: COPY_URL_KEY,
                ...isCopied && {
                    tooltipId: selectedPagePath,
                    tooltipText: TOOLTIP_TEXT,
                },
                handleButtonClick,
                handleTooltipHide: resetCopiedUrlKey,
            }}
        >
            <Svg
                {...{
                    className: isCopied ? 'copyUrlCopied' : 'copyUrl',
                    src: isCopied ? copyUrlCopied : copyUrl,
                }}
            />
        </ShareButton>
    )
}

export default CopyUrlButton
