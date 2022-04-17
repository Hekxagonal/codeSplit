import * as S from './styles';

export interface iComponent {
  children: string;
  size: string;
  fontColor: string;
  color: string;
}

const Button = ({ children, size = '20px', fontColor, color }: iComponent) => {
  return (
    <S.Container>
      <S.Button color={color} fontColor={fontColor} size={size}>
        {children}
      </S.Button>
    </S.Container>
  );
};

export default Button;
