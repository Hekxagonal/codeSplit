import { useEffect, useState } from 'react';
import { getMenuData, getPosts } from '../api';
import Navbar from '../src/components/Navbar';
import Posts from '../src/templates/Posts';
import Head from 'next/head';
import { PostTypes } from '../src/components/Post';
import Loading from '../src/components/Loading/';
import Menu from '../src/components/CategMenu';
import ApiError from '../src/components/ApiError';

type posts = [PostTypes];

type types = {
  types: string[];
  categories: string[];
};

export default function Home() {
  const [posts, setPosts] = useState<posts | undefined>(undefined);
  const [menuData, setMenuData] = useState<types | undefined>(undefined);
  const [isError, setIsError] = useState(false);
  const [page] = useState(0);

  useEffect(() => console.log(posts), [posts]);

  useEffect(() => {
    const getValues = async () => {
      return await getPosts();
    };
    getValues()
      .then((r) => {
        setPosts(r);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [page]);

  useEffect(() => {
    const getValues = async () => {
      return await getMenuData();
    };
    getValues()
      .then((r) => {
        setMenuData(r);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return <ApiError />;
  }

  return (
    <>
      <Head>
        <title>Python Project</title>
      </Head>
      <Navbar logo="Python" />
      <Menu types={menuData?.types} categories={menuData?.categories} />
      {posts ? <Posts content={posts} /> : <Loading />}
    </>
  );
}
