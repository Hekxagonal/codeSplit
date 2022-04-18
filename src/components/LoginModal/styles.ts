import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  height: 90px;
`;

export const Button = styled.div`
  align-self: flex-end;
`;

export const Input = styled.input`
  padding: 7px;
  border: 1px solid gray;
  border-radius: 5px;
`;
