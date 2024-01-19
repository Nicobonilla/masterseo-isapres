import React from 'react';
import { Meta } from '../components/layout/Meta';
import { AppConfig } from '../components/utils/AppConfig';
import { Banner } from './Banner';
import { Hero } from './Hero';
import { Footer } from './Footer';

export default function Base() {
  const { title, description } = AppConfig;
  return (<>
    <Meta title={title} description={description} />
    <Hero />
    <Banner />
    <Footer />
  </>
  );
}
