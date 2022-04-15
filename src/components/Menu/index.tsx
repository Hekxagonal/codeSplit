import * as S from './styles';

export interface iComponent {
  children: string;
}

const Menu = ({ children }: iComponent) => {
  return (
    <S.Container>
      <h1>{children}</h1>
    </S.Container>
  );
};

export default Menu;
