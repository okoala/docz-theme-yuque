import styled from 'styled-components'
import { get } from '~utils/theme'

export const OrderedList = styled.ol`
  list-style: none;
  counter-reset: my-awesome-counter;

  & li {
    counter-increment: my-awesome-counter;
    ${get('styles.li')};
  }

  ${get('styles.ol')};
`
