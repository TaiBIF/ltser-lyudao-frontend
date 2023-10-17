import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Kvbox from 'components/Home/Kvbox';
import About from 'components/Home/About';
import News from 'components/Home/News';
import SurveyMap from 'components/Home/SuveryMap';

import { EnterState } from 'types/home';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import { useHeaderContext } from 'context/HeaderContext';

const Home = () => {
  const PAGE_NAME = 'Home';

  const [enter, setEnter] = useState<EnterState>({
    s2: false,
    s3: false,
    s4: false,
  });
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');
  const { handleGoogleSignIn } = useAuthContext();
  const { setShow } = useHeaderContext();

  useEffect(() => {
    if (code) {
      handleGoogleSignIn({ code, setShow });
    }
  }, [location, code]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: '.s2-about',
      start: 'top-=70% top',
      // markers: true,
      onEnter: () => {
        setEnter({ ...enter, s2: true });
      },
    });
    ScrollTrigger.create({
      trigger: '.s3-news',
      start: 'top-=60% top',
      // markers: true,
      onEnter: () => {
        setEnter({ ...enter, s2: true, s3: true });
      },
    });
    ScrollTrigger.create({
      trigger: '.s4-sumap',
      start: 'top-=60% top',
      // markers: true,
      onEnter: () => {
        setEnter({ ...enter, s2: true, s3: true, s4: true });
      },
    });
  }, []);

  return (
    <>
      <Kvbox PAGE_NAME={PAGE_NAME} />
      <About enter={enter} PAGE_NAME={PAGE_NAME} />
      <News enter={enter} />
      <SurveyMap enter={enter} />
    </>
  );
};

export default Home;
