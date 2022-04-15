import Post, { PostTypes } from '../../components/Post';
import * as S from './styles';

export interface iComponent {
  content: [PostTypes];
}

const Posts = ({ content }: iComponent) => {
  return (
    <S.Container>
      {content.map((el, i) => (
        <S.PostBox key={i}>
          <Post
            type={el.type}
            title={el.title}
            short_description={el.short_description}
            link={el.link}
            createdAt={el.createdAt}
          />
        </S.PostBox>
      ))}
    </S.Container>
  );
};

export default Posts;
