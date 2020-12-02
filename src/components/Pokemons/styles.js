import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  ${({ theme }) => css`
    margin: ${theme.spacings.small} auto;
    padding: ${theme.spacings.small};
  `}
`

export const Ul = styled.ul`
`

export const Li = styled.li`
  align-self: auto;
  list-style-type: none;
  line-height: 3rem;
  margin: 5px 10rem;
  text-align: center;
  background: darkorange;
  border: solid 1px whitesmoke;
  border-radius: 5px;
`