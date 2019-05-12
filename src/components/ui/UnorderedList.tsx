import styled from 'styled-components'
import { get } from '~utils/theme'

export const UnorderedList = styled.ul`
  ${get('styles.ul')};

  ul li {
    padding-left: 25px;
  }

  li {
    ${get('styles.li')};
  }
`
