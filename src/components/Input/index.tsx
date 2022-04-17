import * as S from './styles';

export interface iComponent {
  placeholder: string;
  width?: string;
  fontSize?: string;
}

const Input = ({ placeholder, width, fontSize }: iComponent) => {
  return (
    <S.Container fontSize={fontSize} width={width}>
      <S.Input placeholder={placeholder} />
    </S.Container>
  );
};

export default Input;
