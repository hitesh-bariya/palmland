import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Start of HubSpot Embed Code --> */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/39845154.js"
        ></script>
        {/* <!-- End of HubSpot Embed Code --> */}
        {/* <link
          rel="preload"
          href="/assets/fonts/Lato-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/assets/fonts/Lato-Light.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/assets/fonts/Lato-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/assets/fonts/Roboto-Light.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/assets/fonts/Roboto-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/assets/fonts/Roboto-Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/assets/fonts/Roboto-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        ></link> */}

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link> */}
      </Head>

      <body>
        <Main />
        <NextScript />
        {/* <Script src="https://chimerical-biscochitos-762ef7.netlify.app/livechat.js" />
        <noscript>
          <a href="https://www.livechat.com/chat-with/15422205/" rel="nofollow">
            Chat with us
          </a>
          , powered by{" "}
          <a
            href="https://www.livechat.com/?welcome"
            rel="noopener nofollow"
            target="_blank"
          >
            LiveChat
          </a>
        </noscript> */}
      </body>
    </Html>
  );
}
