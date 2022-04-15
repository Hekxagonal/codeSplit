import styled from 'styled-components';

export const Container = styled.div``;

export const Cover = styled.img`
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

export const Content = styled.div`
  margin-top: -50px;
  background: white;
  padding: 20px;
  border-radius: 30px;
  max-width: 50%;
  box-shadow: 0px 0px 18px 5px rgba(0, 0, 0, 0.23);
`;

export const Info = styled.div``;

export const PostWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const Title = styled.h1`
  margin-bottom: 0;
`;

export const Type = styled.div`
  margin-bottom: 20px;
  color: gray;
`;

export const Author = styled.div`
  color: gray;
  text-align: right;
`;

export const Username = styled.span`
  font-family: 'Courier New', Courier, monospace;
`;
