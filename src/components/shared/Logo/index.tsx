import * as React from 'react'
import { SFC } from 'react'
import { useConfig } from 'docz'
import styled from 'styled-components'

import { breakpoints } from '~styles/responsive'
import { get } from '~utils/theme'

interface WrapperProps {
  showBg: boolean
  theme?: any
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;

  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }

  @media screen and (max-width: ${breakpoints.desktop}px) {
    &:before {
      height: ${p => (p.showBg ? '3px' : 0)};
    }
  }

  ${get('styles.logo')};
`

const LogoImg = styled('img')`
  padding: 0;
  margin: 5px 0;
  float: left;
  margin-right: 10px;
`

const LogoText = styled('h1')`
  margin: 9px 0;
  font-size: 22px;
  font-weight: 400;
  color: ${get('colors.sidebarText')};
  overflow: hidden;
`

interface LogoProps {
  showBg: boolean
}

export const Logo: SFC<LogoProps> = ({ showBg }) => {
  const {
    base,
    title,
    linkComponent: Link,
    themeConfig: { logo },
  } = useConfig()

  if (!Link) return null
  return (
    <Wrapper showBg={showBg}>
      <Link to={typeof base === 'string' ? base : '/'}>
        {logo && logo.src && (
          <LogoImg src={logo.src} width={logo.width} alt={title} />
        )}
        <LogoText>{title}</LogoText>
      </Link>
    </Wrapper>
  )
}
