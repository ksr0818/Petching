import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  const code: string | null = new URL(window.location.href).searchParams.get(
    'code',
  );
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const kakao = async () => {
      return await axios
        .get(`${BASE_URL}/kakaoLogin?code=${code}`)
        .then(response => {
          const data = response.data;
          if (data.message === 'success') {
            console.log(data);
            const accessToken = response.headers['authorization'];
            const refreshToken = response.headers['refresh'];
            localStorage.setItem('ACCESS_TOKEN', accessToken);
            const date = new Date();
            //쿠키 만료시간 7일뒤
            date.setDate(date.getDate() + 7);
            document.cookie = `REFRESH_TOKEN=${refreshToken} expires=${date.toUTCString()};`;
            goToMain();
            alert('로그인 성공');
          } else {
            goToMain();
            alert('로그인 실패');
          }
        });
    };
    if (code) {
      kakao();
    }
  }, [code, navigate]);

  return <div>kakaoLogin</div>;
};

export default KakaoLogin;
