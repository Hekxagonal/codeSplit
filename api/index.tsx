const root = 'http://192.168.0.102:1337/api/';
import qs from 'qs';

export const getGithubData = async (user: string) => {
  const query = `https://raw.githubusercontent.com/${user}/${user}/main/info.codeplit.json`;

  const result = await fetch(query);
  const json = await result.json();
  return json;
};
