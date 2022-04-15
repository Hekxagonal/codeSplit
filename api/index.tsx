const root = 'http://192.168.0.102:1337/api/';
import qs from 'qs';
import mapData, { mapMenuData } from './map-data';

const PostsPerPage = 20;

export const getPosts = async (page = 0) => {
  const query = qs.stringify(
    {
      pagination: {
        start: page * PostsPerPage,
        limit: PostsPerPage,
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const result = await fetch(root + 'posts/?' + query + '&populate=*');

  return mapData(await result.json());
};

export const getMenuData = async () => {
  const types = await fetch(root + 'content-type-builder/components');
  const categories = await fetch(root + 'categories');

  return mapMenuData(await types.json(), await categories.json());
};
