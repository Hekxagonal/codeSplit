import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
  background-color: ${({ color }) => color || 'black'};
  border: none;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  ${({ size }) => (size ? `font-size:${size};` : '')}
  color: ${({ fontColor }) => fontColor || 'white'};
  padding: 5px 10px 5px 10px;
`;
