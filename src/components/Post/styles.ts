import styled from 'styled-components';
import { StyledComponentProps } from '../../global/theme/interface';
import { BiUserPin } from 'react-icons/bi';

export const Container = styled.div`
  width: 400px;
  padding: 0px 0px 10px 0px;
  border-bottom: 1px solid gray;
  background: ${({ theme, themeValue }: StyledComponentProps) =>
    theme[themeValue].box};
  color: ${({ theme, themeValue }: StyledComponentProps) =>
    theme[themeValue].text};
  transition: all 1s ease-in-out;
`;

export const Heading = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  margin: 10px 20px 10px 20px;
  border-bottom: 1px solid gray;
`;

export const PostType = styled.span`
  color: gray;
  font-size: 15px;
`;

export const Time = styled.div``;

export const ContentWrapper = styled.div`
  margin: 0px 10px 0px 10px;
`;

export const Title = styled.div`
  font-size: 125%;
`;

export const Description = styled.div`
  color: gray;
  font-size: 15px;
  text-align: center;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileIcon = styled(BiUserPin)`
  margin-right: 5px;
`;

export const ProfilePhoto = styled.img`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Commit = styled.div`
  font-family: 'Source Code Pro', monospace;
  font-style: italic;
  font-size: 15px;
  text-align: center;
`;
