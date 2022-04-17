import styled from 'styled-components';
import { iComponent as Props } from './';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  ${({ width }: Props) => (width ? `width:${width}` : '')}
  ${({ fontSize }: Props) => (fontSize ? `font-size:${fontSize}` : '')}
`;

export const Input = styled.input`
  padding: 7px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;
