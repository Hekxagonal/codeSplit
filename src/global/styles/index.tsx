import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';
import * as S from './styles';

const GlobalStylesProvider = () => {
  const { state } = useContext(ThemeContext);

  return (
    <>
      <S.GlobalStyles themeValue={state.theme} />
    </>
  );
};

export default GlobalStylesProvider;
