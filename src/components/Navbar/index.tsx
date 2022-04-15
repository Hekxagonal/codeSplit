import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';
import * as types from '../../contexts/theme/actions';
import * as S from './styles';

export interface iComponent {
  logo: string;
  user?: string;
}

const Navbar = ({ logo }: iComponent) => {
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <S.Container themeValue={state.theme}>
      <S.ColumnLeft>
        <h1>{logo}</h1>
      </S.ColumnLeft>

      <S.ColumnRight>
        <S.ThemeIcon
          onClick={() => dispatch({ type: types.CHARGE_THEME })}
          size="30px"
        />
      </S.ColumnRight>
    </S.Container>
  );
};

export default Navbar;
