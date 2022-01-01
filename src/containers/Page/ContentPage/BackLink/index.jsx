import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../contexts/PageConfig'
import Anchor from '../../../../components/Anchor'
import Flex from '../../../../components/Flex'
import StyledButtonText from '../../../../components/Styled/ButtonText'
import StyledBackLink from '../../../../components/Styled/TabbedBackLink'
import Svg from '../../../../components/Svg'
import { mapShowTabbedMenuBackLink } from '../../../../redux/page/selector'
import { getTabbedBackLinkText } from '../../../../utils/pages/format'
import { getTabbedBackLinkPath } from '../../../../utils/pages/path/tabbed'
import backLink from '../../../../assets/svgs/app/backLink'

const BackLink = ({ isStyledShadow }) => {
    const
        { topLevelPage, date } = useContext(PageConfigContext),
        showBackLink = useSelector(mapShowTabbedMenuBackLink),
        Tag = isStyledShadow ? StyledBackLink : Anchor,
        TextTag = isStyledShadow ? StyledButtonText : Fragment

    return showBackLink && (
        <Tag
            {...{
                className: cx(
                    'BackLink',
                    'font__button',
                ),
                pagePath: getTabbedBackLinkPath({ topLevelPage, date }),
            }}
        >
            <TextTag>
                <Flex
                    {...{
                        gap: 'xxs',
                    }}
                >
                    <Svg
                        {...{
                            className: cx(
                                'link__icon',
                            ),
                            src: backLink,
                        }}
                    />
                    <div
                        {...{
                            className: cx(
                                'BackLink__text',
                            ),
                        }}
                    >
                        {getTabbedBackLinkText({ date })}
                    </div>
                </Flex>
            </TextTag>
        </Tag>
    )
}

BackLink.propTypes = {
    isStyledShadow: PropTypes.bool,
}

export default BackLink
