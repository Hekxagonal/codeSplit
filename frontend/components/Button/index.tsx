import * as S from './styles'

interface ButtonProps {
  primary?: boolean;
  background?: string;
  children: string;
  fontSize?: string;
  padding?: string;
  style?: Object;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  background,
  fontSize,
  padding,
  children,
  style,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      $primary={primary}
      type="button"
      background={background}
      fontSize={fontSize}
      padding={padding}
      style={style}
      {...props}
    >{children}
    </S.Button>
  );
};

export default Button;
