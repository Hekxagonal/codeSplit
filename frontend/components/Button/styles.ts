import styled from 'styled-components'

export const Button = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${({$primary}) => $primary ? 'white' : '#333'};
  background-color: ${({$primary}) => $primary ? '#1ea7fd' : 'transparent'};
  box-shadow: ${({$primary}) => $primary ? 'none' : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};
  ${({background}) => background ? `background-color: ${background};` : null}
  font-size: ${({fontSize}) => fontSize || '14px'};
  padding: ${({padding}) => padding || '11px 20px'};
`
