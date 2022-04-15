import * as S from './styles';
import getTimeAgo from './getTimeAgo';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';

export interface PostTypes {
  // Tipos do Componente
  type: 'article' | 'video';
  title: string;
  short_description: string;
  link?: string;
  createdAt: string;
}

const Post = ({
  type,
  title,
  short_description,
  link,
  createdAt,
}: PostTypes) => {
  const { state } = useContext(ThemeContext);
  return (
    <S.Container themeValue={state.theme}>
      {type === 'article' ? (
        <S.Image src={link} alt="cover" />
      ) : (
        <S.VideoFrame
          src={link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}

      <S.Heading>
        <S.PostType>{type}</S.PostType>
        <S.Time>{getTimeAgo(createdAt)}</S.Time>
      </S.Heading>

      <S.ContentWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{short_description}</S.Description>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Post;
