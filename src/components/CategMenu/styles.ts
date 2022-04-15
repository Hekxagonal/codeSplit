import styled from 'styled-components';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

interface Props {
  isOpen: boolean;
}

export const Container = styled.div``;

export const OpenButton = styled.div`
  border: 2px solid black;
  position: absolute;
  top: 50%;
  left: ${({ isOpen }: Props) => (isOpen ? '0%' : '-30%')};
  margin-left: 28.5%;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 1s ease-in-out;
  background-color: rgba(255, 255, 255, 0.5);

  @media (max-width: 1333px) {
    z-index: 1;
    position: fixed;
    top: 90%;
    left: -30%;
  }
`;

export const ArrowIn = styled(MdArrowForwardIos)`
  opacity: ${({ isOpen }: Props) => (isOpen ? '100%' : '0%')};
  position: absolute;
  margin-left: 30px;
  margin-top: 17px;
  transition: opacity 1s ease-in-out;
`;
export const ArrowOut = styled(MdArrowBackIos)`
  opacity: ${({ isOpen }: Props) => (isOpen ? '100%' : '0%')};
  position: absolute;
  margin-left: 30px;
  margin-top: 17px;
  transition: opacity 1s ease-in-out;
`;

export const MenuWrapper = styled.div`
  display: block;
  border-right: 2px solid black;
  position: absolute;
  top: 0;
  left: ${({ isOpen }: Props) => (isOpen ? '0%' : '-30%')};
  height: 100%;
  width: 30%;
  min-width: 400px;
  background: white;
  transition: all 1s ease-in-out;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1333px) {
    left: ${({ isOpen }: Props) => (isOpen ? '0%' : '-100%')};
  }
`;

export const Title = styled.div`
  font-size: 30px;
`;

export const InputSearch = styled.input`
  border: 2px solid gray;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
  width: 50%;
`;

export const CategTitle = styled.div`
  margin-top: 10px;
`;

export const Subtitle = styled.div`
  margin-top: -10px;
  font-size: 15px;
  color: gray;
`;

export const Categ = styled(Subtitle).attrs({ as: 'a' })`
  margin: 0;
  cursor: pointer;
`;

export const Logo = styled.h1`
  position: absolute;
  top: 0;
  left: 30px;
`;
