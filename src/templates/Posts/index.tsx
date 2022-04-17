import { useEffect } from 'react';
import Post, { PostTypes } from '../../components/Post';
import * as S from './styles';

export interface iComponent {
  github_feed: [PostTypes];
  feed: [PostTypes];
}

const Posts = ({ github_feed, feed }: iComponent) => {
  useEffect(() => {
    const get = async () => {
      const raw = await fetch(
        'https://raw.githubusercontent.com/Hekxagonal/Hekxagonal/main/info.codeplit.json',
      );
      const json = await raw.json();
      console.log(json);
    };
    get();
  }, []);
  return (
    <S.Container>
      <div>
        {github_feed.map((el, i) => (
          <S.PostBox key={i}>
            <Post
              type={el.type}
              title={el.title}
              content={el.content}
              user={el.user}
              profile_photo={el.profile_photo}
              createdAt={el.createdAt}
            />
          </S.PostBox>
        ))}
      </div>
      <div>
        {feed.map((el, i) => (
          <S.PostBox key={i}>
            <Post
              type={el.type}
              title={el.title}
              content={el.content}
              user={el.user}
              profile_photo={el.profile_photo}
              createdAt={el.createdAt}
            />
          </S.PostBox>
        ))}
      </div>
    </S.Container>
  );
};

export default Posts;
