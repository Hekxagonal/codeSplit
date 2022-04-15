import { PostTypes } from '../../components/Post';
import * as S from './styles';
import ReactMarkdown from 'react-markdown';
import getTimeAgo from '../../components/Post/getTimeAgo';

export interface iComponent extends PostTypes {
  content: string;
  author: {
    name: string;
    username: string;
  };
}

const ViewPost = ({
  title,
  type,
  short_description,
  content,
  link,
  createdAt,
  author,
}: iComponent) => {
  return (
    <S.Container>
      <S.Cover src={link} />
      <S.PostWrapper>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Type>{type}</S.Type>
          {short_description} <br />
          {getTimeAgo(createdAt)} <br />
        </S.Info>
        <S.Content>
          <S.Author>
            by {author.name} <S.Username>(@{author.username})</S.Username>
          </S.Author>
          <ReactMarkdown>{content}</ReactMarkdown>
        </S.Content>
      </S.PostWrapper>
    </S.Container>
  );
};

export default ViewPost;
