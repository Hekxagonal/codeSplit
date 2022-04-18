import { useContext, useEffect, useState } from 'react';
import ApiError from '../src/components/ApiError';
import { getGithubData } from '../api';
import LoginModal from '../src/components/LoginModal';
import { UserContext } from '../src/contexts/user';
import InfoModal from '../src/components/InfoModal';
import * as userTypes from '../src/contexts/user/actions';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';

export default function Home() {
  const userContext = useContext(UserContext);
  const [data, setData] = useState(userContext.state.data);
  const [showInfo, setShowInfo] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => console.log(showInfo), [showInfo]);
  const handleClickConfirm = (value: string) => {
    console.log(value);
    userContext.dispatch({
      type: userTypes.LOGIN,
      payload: { username: value },
    });
    console.log('SET USER');

    console.log('Fetch');
    const getValues = async (user: string) => {
      return await getGithubData(user);
    };
    getValues(value)
      .then((r) => {
        setData(r);
        setShowInfo(true);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
      });
  };

  const handleConfirmData = () => {
    userContext.dispatch({
      type: userTypes.SET_GITHUB_DATA,
      payload: { data },
    });
    setShowInfo(false);
  };

  if (isError) {
    return <ApiError />;
  }

  if (!userContext.state.user) {
    return <LoginModal confirm={handleClickConfirm} />;
  }

  if (showInfo) {
    return <InfoModal confirm={handleConfirmData} content={data} />;
  }
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar logo="Blog" />
    </>
  );
}
