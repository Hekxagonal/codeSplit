import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const LoadingAnimation = keyframes`
    0% { transform: rotate(0deg)};
    100% { transform: rotate(360deg)};
`;

export const Loading = styled.div`
  border: 4px solid black;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  ::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-sizing: border-box;
    border-bottom: 4px solid black;
    margin-left: -15px;
    margin-top: -14px;
    animation: ${LoadingAnimation} 1s ease-in-out infinite;
  }

  ::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-sizing: border-box;
    border-top: 2px solid black;
    margin-left: 9px;
    margin-top: 9px;
    animation: ${LoadingAnimation} 1s ease-in-out infinite;
  }
`;
