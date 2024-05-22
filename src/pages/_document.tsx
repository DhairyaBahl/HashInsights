import { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from "react-hot-toast";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Welcome to My Blog Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
