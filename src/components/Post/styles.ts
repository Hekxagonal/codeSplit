import styled from 'styled-components';
import { StyledComponentProps } from '../../global/theme/interface';

export const Container = styled.div`
  width: 400px;
  padding: 0px 0px 10px 0px;
  border: 1px solid gray;
  border-radius: 5px;
  background: ${({ theme, themeValue }: StyledComponentProps) =>
    theme[themeValue].box};
  color: ${({ theme, themeValue }: StyledComponentProps) =>
    theme[themeValue].text};
  transition: all 1s ease-in-out;

  :hover {
    box-shadow: 0px 0px 18px 5px rgba(0, 0, 0, 0.23);
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  margin: 0px 20px 10px 20px;
  border-bottom: 1px solid gray;
`;

export const PostType = styled.div`
  color: gray;
  font-size: 15px;
`;

export const Time = styled.div``;

export const Image = styled.img`
  width: 100%;
  max-height: 200px;
  height: 20%;
  object-fit: cover;
  object-position: 0 50%;
  transition: all 0.5s ease-in-out;

  :hover {
    object-position: 0 70%;
  }
`;

export const VideoFrame = styled(Image).attrs({ as: 'iframe' })`
  width: 100%;
  height: 590px;
`;

export const ContentWrapper = styled.div`
  margin: 0px 10px 0px 10px;
`;

export const Title = styled.div`
  font-size: 125%;
`;

export const Description = styled.div`
  color: gray;
  font-size: 15px;
`;
