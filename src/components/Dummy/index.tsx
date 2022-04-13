import * as S from './styles';

interface Component {
  children: string;
}

const Dummy = ({ children }: Component) => {
  return (
    <S.Container>
      <h1>{children}</h1>
    </S.Container>
  );
};

export default Dummy;
