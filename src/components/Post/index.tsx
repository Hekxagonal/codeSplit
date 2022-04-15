import * as S from './styles';
import getTimeAgo from './getTimeAgo';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';

export interface PostTypes {
  // Tipos do Componente
  type: 'article' | 'video';
  user: string;
  title: string;
  content: string;
  profile_photo?: string;
  createdAt: string;
}

const Post = ({
  type,
  title,
  user,
  content,
  profile_photo,
  createdAt,
}: PostTypes) => {
  const { state } = useContext(ThemeContext);
  return (
    <S.Container themeValue={state.theme}>
      <S.Heading>
        <S.AuthorInfo>
          {profile_photo ? (
            <S.ProfilePhoto src={profile_photo} />
          ) : (
            <S.ProfileIcon size="20px" />
          )}
          @{user}
        </S.AuthorInfo>
        <S.Time>{getTimeAgo(createdAt)}</S.Time>
      </S.Heading>

      <S.ContentWrapper>
        <S.Description>{title}</S.Description>
        <S.Commit>{content}</S.Commit>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Post;
