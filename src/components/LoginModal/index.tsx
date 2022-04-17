import Button from '../Button';
import Input from '../Input';
import * as S from './styles';

const LoginModal = () => {
  return (
    <S.Container>
      <Input placeholder="Your github username" width="100%" />
      <S.Button>
        <Button>Enter</Button>
      </S.Button>
    </S.Container>
  );
};

export default LoginModal;
