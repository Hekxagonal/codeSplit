import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  width: fit-content;
  padding: 20px 20px;
  display: flex;
  flex-flow: column nowrap;
`;

export const Title = styled.div``;

export const Limiter = styled.h1`
  font-size: 20px;
`;

export const Row = styled.div`
  margin-left: 20px;
`;

export const Key = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

export const Value = styled.span`
  font-family: 'Source Code Pro', monospace;
  font-style: italic;
`;

export const Bool = styled(Value)`
  color: gray;
`;

export const Button = styled.div`
  align-self: flex-end;
`;
