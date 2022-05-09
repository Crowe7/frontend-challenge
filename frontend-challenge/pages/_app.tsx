import '../styles/globals.css'
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import { NotificationsProvider } from '@mantine/notifications';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Midwestern Test</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" type="image/x-icon" href="https://i.ibb.co/LY4Bt2r/Logo.png"></link>
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          fontFamily: 'Poppins',
          headings: {fontFamily: 'Poppins'},
          colorScheme: 'dark',
          colors: {
            dark: [
              '#F5F5F5',
              '#A6A7AB',
              '#909296',
              '#5C5F66',
              '#373A40',
              '#2C2E33',
              '#25262B',
              '#222222',
              '#141517',
              '#858585',
            ],
          },
        }}
      >
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
/*
  Primary Colors:
    Gold: #DEBF79
    Dark Gray (background, text): #222222
    Mid Gray (input text): #858585
    Light Gray (inputs, contrast text): #F5F5F5
    Red: #800000
*/