import {useEffect, useState} from 'react';
import fetchData from '../utils/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaUrl = import.meta.env.VITE_MEDIA_API + '/media';
        const authUrl = import.meta.env.VITE_AUTH_API + '/users/';
        const mediaItems = await fetchData(mediaUrl);

        const mediaWithUsers = await Promise.all(
          mediaItems.map(async item => {
            try {
              const result = await fetchData(authUrl + item.user_id);
              return {...item, username: result.username};
            } catch (error) {
              console.error(error);
              return {...item, username: 'Unknown'};
            }
          })
        );

        setMediaArray(mediaWithUsers);
      } catch (error) {
        console.error(error);
      }
    };

    getMedia();
  }, []);

  return {mediaArray};
};

const useAuthentication = () => {
  const postLogin = async inputs => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      fetchOptions
    );
    return loginResult;
  };

  return {postLogin};
};

const useUser = () => {
  const getUserByToken = async token => {
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const userData = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/token',
      fetchOptions
    );
    return userData;
  };

  const postUser = async inputs => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    const registerResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users',
      fetchOptions
    );
    return registerResult;
  };

  return {getUserByToken, postUser};
};

export {useMedia, useAuthentication, useUser};
