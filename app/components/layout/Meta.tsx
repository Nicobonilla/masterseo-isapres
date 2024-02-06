import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { AppConfig } from '../utils/AppConfig';
import { Metadata } from 'next';

// Assuming you have a BASE_PATH constant in your AppConfig or similar config file
const { BASE_PATH } = AppConfig;

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${BASE_PATH}/apple-touch-icon.png`}
          key="apple"
        />
        <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${BASE_PATH}/favicon-32x32.png`}
      key="icon32"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${BASE_PATH}/favicon-16x16.png`}
      key="icon16"
    />
    <link
      rel="icon"
      href={`${BASE_PATH}/favicon.ico`}
      key="favicon"
    />
  </Head>
  {/* <NextSeo
    title={props.title}
    description={props.description}
    canonical={props.canonical}
    openGraph={{
      title: props.title,
      description: props.description,
      url: props.canonical,
      locale: AppConfig.locale,
      site_name: AppConfig.site_name,
    }}
  /> */}
</>
)}
export { Meta };
