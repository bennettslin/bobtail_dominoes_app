import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../contexts/PageConfig'
import Anchor from '../../../../components/Anchor'
import Button from '../../../../components/Button'
import Flex from '../../../../components/Flex'
import Svg from '../../../../components/Svg'
import StyledButtonText from '../../../../components/Styled/ButtonText'
import popupClose from '../../../../assets/svgs/app/popupClose'
import { getMapShowBackLink } from '../../../../redux/page/selector'
import { getCapitalizedText } from '../../../../utils/format'
import './style'

const BackLink = ({ isStyledText }) => {
    const
        { topLevelPage } = useContext(PageConfigContext),
        showBackLink = useSelector(getMapShowBackLink(topLevelPage)),
        Tag = isStyledText ? Button : Anchor,
        TextTag = isStyledText ? StyledButtonText : Fragment

    return showBackLink && (
        <Tag
            {...{
                className: cx(
                    'BackLink',
                    'font__button',
                ),
                pagePath: topLevelPage,
            }}
        >
            <TextTag>
                <Flex>
                    <Svg
                        {...{
                            className: cx(
                                'link__icon',
                            ),
                            src: popupClose,
                        }}
                    />
                    <div
                        {...{
                            className: cx(
                                'BackLink__text',
                            ),
                        }}
                    >
                        {getCapitalizedText(topLevelPage)}
                    </div>
                </Flex>
            </TextTag>
        </Tag>
    )
}

BackLink.propTypes = {
    isStyledText: PropTypes.bool,
}

export default BackLink
