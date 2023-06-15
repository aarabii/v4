import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="My space on web" />
        <meta name="description" content="Aarab's portfolio" />
        <meta
          name="keywords"
          content="Aarab, nishchal, aarab nishchal, react, reactJs, react portfolio, portfolio, portfolio website, css, heroku, losier, twexy"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>
      <body onContextMenu={() => true}>
        {/* Disable right click */}
        <noscript>
          <div className="no-script">
            <div className="no-script-content">
              <h1>Please enable JavaScript</h1>
              <p>
                This website works best with JavaScript enabled. It looks like
                JavaScript is either disabled or not supported by your browser.
                To get the full experience please enable JavaScript by changing
                your browser options, then try again.
              </p>
            </div>
          </div>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
