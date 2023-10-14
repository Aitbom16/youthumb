import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Add Google AdSense code to the head section */}
                    <script
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                (adsbygoogle = window.adsbygoogle || []).push({
                  google_ad_client: "ca-pub-1234567890", // Replace with your AdSense client ID
                  enable_page_level_ads: true
                });
              `,
                        }}
                    />
                    {/* End of Google AdSense code */}

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicon/site.webmanifest" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
