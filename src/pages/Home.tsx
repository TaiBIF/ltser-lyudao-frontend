import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Kvbox from 'components/Home/Kvbox';
import About from 'components/Home/About';
import News from 'components/Home/News';
import Sumap from 'components/Home/Sumap';

import { EnterState } from 'types/home';

const Home = () => {
  const [enter, setEnter] = useState<EnterState>({
    s2: false,
    s3: false,
    s4: false,
  });

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
      <Kvbox />
      <About enter={enter} />
      <News enter={enter} />
      <Sumap enter={enter} />
    </>
  );
};

export default Home;
