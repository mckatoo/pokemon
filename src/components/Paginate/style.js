import styled from "styled-components";

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  background-color: orangered;
  border: solid 1px white;
  border-radius: 3px;
  text-align: center;
`

export const Li = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Button = styled.button`
  background-color: darkorange;
  margin: 5px;
  align-self: auto;
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
`

export const Pages = styled.div`
  line-height: 4rem;
  color: whitesmoke;
  font-weight: 600;
`
