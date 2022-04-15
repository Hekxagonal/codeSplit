import { useState } from 'react';
import Loading from '../Loading';
import * as S from './styles';

export interface iComponent {
  types?: string[];
  categories?: string[];
}

const upperCase = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Menu = ({ types, categories }: iComponent) => {
  const [isOpen, setIsOpen] = useState(true); // default is false
  return (
    <S.Container>
      <S.OpenButton isOpen={isOpen} onClick={() => setIsOpen((old) => !old)}>
        <S.ArrowIn isOpen={!isOpen} /> <S.ArrowOut isOpen={isOpen} />
      </S.OpenButton>

      <S.MenuWrapper isOpen={isOpen}>
        {types && categories ? (
          <>
            <S.Logo>Python</S.Logo>
            <S.Title>Menu</S.Title>
            <S.Subtitle>Navegue Pela Pagina</S.Subtitle>
            <S.InputSearch placeholder="Search Here" />

            <S.CategTitle>Por Tipos de Post</S.CategTitle>
            {types.map((el, i) => (
              <S.Categ key={i}>{upperCase(el)}</S.Categ>
            ))}

            <S.CategTitle>Por Categoria de Post</S.CategTitle>

            {categories.map((el, i) => (
              <S.Categ key={i}>{upperCase(el)}</S.Categ>
            ))}
          </>
        ) : (
          <Loading />
        )}
      </S.MenuWrapper>
    </S.Container>
  );
};

export default Menu;
