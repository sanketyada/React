import styled from "styled-components"

export const Button = styled.button`
color: balck;
padding: 10px 10px;
gap: 10px;
background-color: white;
border-radius: 10px;
min-width: 220px;
border: none;
font-size: 15px;
border: 1px solid black;
transition: 0.4s ease-in;
cursor: pointer;
&:hover{
  background-color: #000;
  border: 1px solid black;
  color: white;
  transition: 0.3s ease-in;
}
`
export const OutlineButton = styled(Button)`
color: white;
background-color: black;
&:hover{
  background-color: white;
  border: 1px solid transparent;
  color: black;
  transition: 0.3s ease-in;
}
`
