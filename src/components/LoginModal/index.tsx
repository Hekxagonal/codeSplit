import { useContext, useRef } from 'react';
import { UserContext } from '../../contexts/user';
import Button from '../Button';
import * as S from './styles';

export interface LoginModalProps {
  confirm: (e) => void;
}

const LoginModal = ({ confirm }: LoginModalProps) => {
  const input = useRef();

  return (
    <S.Container>
      <S.Input ref={input} placeholder="Your github username" width="100%" />
      <S.Button>
        <Button onClick={() => confirm(input.current.value)}>Enter</Button>
      </S.Button>
    </S.Container>
  );
};

export default LoginModal;
