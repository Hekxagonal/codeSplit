import styled from 'styled-components';
import { VscColorMode } from 'react-icons/vsc';
import { StyledComponentProps } from '../../global/theme/interface';

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background: ${({ theme, themeValue }: StyledComponentProps) =>
    theme[themeValue].primary};
  color: ${({ theme, themeValue }: StyledComponentProps) =>
    theme[themeValue].secondary};
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  transition: all 1s ease-in-out;
`;

export const ColumnLeft = styled.div`
  margin-left: 20px;
`;

export const ColumnRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`;

export const ThemeIcon = styled(VscColorMode)`
  cursor: pointer;
`;
